type ConsultationSubmission = {
  hotelName: string;
  location: string;
  propertyType: string;
  objective: string;
  name: string;
  email: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readField(
  fields: Record<string, unknown>,
  field: keyof ConsultationSubmission,
  maxLength: number,
) {
  const value = fields[field];

  if (typeof value !== "string" || value.trim().length === 0 || value.length > maxLength) {
    return null;
  }

  return value.trim();
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const hotelName = readField(body, "hotelName", 200);
  const location = readField(body, "location", 200);
  const propertyType = readField(body, "propertyType", 100);
  const objective = readField(body, "objective", 200);
  const name = readField(body, "name", 120);
  const email = readField(body, "email", 254);

  if (!hotelName || !location || !propertyType || !objective || !name || !email) {
    return Response.json({ error: "Please complete all fields and try again." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("Google Sheets consultation integration is not configured.");
    return Response.json(
      { error: "Saving your request is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL(webhookUrl);
  } catch {
    console.error("Google Sheets webhook URL is invalid.");
    return Response.json(
      { error: "Saving your request is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  if (endpoint.protocol !== "https:" || endpoint.hostname !== "script.google.com") {
    console.error("Google Sheets webhook URL must be an HTTPS Google Apps Script URL.");
    return Response.json(
      { error: "Saving your request is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const submission: ConsultationSubmission = {
    hotelName,
    location,
    propertyType,
    objective,
    name,
    email,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...submission, secret: webhookSecret }),
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Google Sheets webhook returned status ${response.status}.`);
      return Response.json(
        { error: "Unable to save your request right now. Please try again later." },
        { status: 502 },
      );
    }

    const result: unknown = await response.json();
    if (!isRecord(result) || result.success !== true) {
      const webhookError =
        isRecord(result) && typeof result.error === "string"
          ? result.error.replace(/[\r\n]/g, " ").slice(0, 200)
          : "No success confirmation";
      console.error(`Google Sheets webhook rejected the submission: ${webhookError}.`);
      return Response.json(
        { error: "Unable to save your request right now. Please try again later." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unable to reach the Google Sheets webhook.", error);
    return Response.json(
      { error: "Unable to save your request right now. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
