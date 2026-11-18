This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Consultation form to Google Sheets

The consultation form appends submissions to a Google Sheet through the Apps Script web app in `scripts/google-sheets-web-app.js`.

1. Open the target spreadsheet, create a tab named `Consultation Requests` (or choose another name), and note its spreadsheet ID from the URL.
2. In the spreadsheet, open **Extensions → Apps Script**, paste the contents of `scripts/google-sheets-web-app.js`, and save.
3. In Apps Script **Project Settings → Script Properties**, add:
   - `SPREADSHEET_ID`: the ID from the spreadsheet URL.
   - `SHEET_NAME`: the target tab name (optional; defaults to `Consultation Requests`).
   - `WEBHOOK_SECRET`: a long, random secret value.
4. Deploy the script as a **Web app**, executing as yourself and allowing access to anyone. The secret is checked by the script; keep it private.
5. Set these server-side environment variables in `.env.local` and in your deployment environment. Use the same `WEBHOOK_SECRET` value as in Apps Script:

   ```bash
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-deployment-id/exec
   GOOGLE_SHEETS_WEBHOOK_SECRET=your_long_random_secret
   ```

The script creates the sheet headers on first submission. If the tab already has data, its first row must contain these headers in this order: Submitted At, Property Name, Destination / City, Property Category, Primary Objective, Name, Email.

If a submission fails after the webhook accepts the secret, check the latest **Apps Script → Executions** entry. Confirm `SPREADSHEET_ID` is the ID from the target spreadsheet URL, `SHEET_NAME` exactly matches an existing tab, and the script owner has edit access. The API server log also reports safe configuration errors returned by the script.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
