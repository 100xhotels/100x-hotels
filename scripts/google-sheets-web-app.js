// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Apps Script calls this entry point.
function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const expectedSecret = properties.getProperty("WEBHOOK_SECRET");
  const spreadsheetId = properties.getProperty("SPREADSHEET_ID");
  const sheetName = properties.getProperty("SHEET_NAME") || "Consultation Requests";

  try {
    const submission = JSON.parse(event.postData.contents);
    if (!expectedSecret || submission.secret !== expectedSecret) {
      return jsonResponse({ success: false, error: "Unauthorized" });
    }

    const fields = [
      ["hotelName", 200],
      ["location", 200],
      ["propertyType", 100],
      ["objective", 200],
      ["name", 120],
      ["email", 254],
    ];

    for (const [field, maxLength] of fields) {
      const value = submission[field];
      if (typeof value !== "string" || value.trim().length === 0 || value.length > maxLength) {
        return jsonResponse({ success: false, error: "Invalid form submission" });
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
      return jsonResponse({ success: false, error: "Invalid email address" });
    }

    if (!spreadsheetId) {
      throw new Error("Missing SPREADSHEET_ID script property");
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
      if (!sheet) {
        throw new Error(`Sheet tab "${sheetName}" was not found`);
      }

      const headers = [
        "Submitted At",
        "Property Name",
        "Destination / City",
        "Property Category",
        "Primary Objective",
        "Name",
        "Email",
      ];

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
      } else {
        const existingHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
        if (headers.some((header, index) => existingHeaders[index] !== header)) {
          throw new Error(`The first row of "${sheetName}" must contain the expected consultation headers`);
        }
      }

      sheet.appendRow([
        new Date(),
        safeCell(submission.hotelName),
        safeCell(submission.location),
        safeCell(submission.propertyType),
        safeCell(submission.objective),
        safeCell(submission.name),
        safeCell(submission.email),
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown spreadsheet error";
    console.error(`Consultation sheet write failed: ${message}`);
    const safeMessage = message
      .replace(/[\r\n]/g, " ")
      .replace(/[A-Za-z0-9_-]{35,}/g, "[redacted]")
      .slice(0, 200);
    return jsonResponse({
      success: false,
      error: message.includes("SPREADSHEET_ID") || message.includes("Sheet tab") || message.includes("expected consultation headers")
        ? safeMessage
        : `Spreadsheet write failed: ${safeMessage}`,
    });
  }
}

function safeCell(value) {
  const text = value.trim();
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
