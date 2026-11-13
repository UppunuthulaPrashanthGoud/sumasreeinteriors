# Suma Sri Interiors & Constructions

Responsive Next.js website with a private lead-management workspace.

## Stack
Next.js 15, React 19, TypeScript, SQLite-compatible libSQL/Turso, signed admin sessions, responsive admin dashboard, CSV export, SEO metadata, LocalBusiness JSON-LD, sitemap and robots.

## Local setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Set a strong unique `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and random `ADMIN_SESSION_SECRET` (32+ characters).
5. Keep `TURSO_DATABASE_URL=file:./data/leads.db` for local SQLite development.
6. Run `npm run dev`.
7. Open `/admin/login` to access the admin workspace.

The SQLite database and table are created automatically on first enquiry. The local database file is stored at `data/leads.db` (excluded from Git).

## Production database (important for Vercel)
Vercel's serverless filesystem is ephemeral; a SQLite file stored inside a deployment is not durable across deployments/instances. For production on Vercel, create a persistent Turso database (libSQL, SQLite-compatible), then configure:
- `TURSO_DATABASE_URL` = the database's libSQL URL
- `TURSO_AUTH_TOKEN` = its auth token
- `ADMIN_EMAIL` = your private administrator email
- `ADMIN_PASSWORD` = a long, unique password
- `ADMIN_SESSION_SECRET` = a cryptographically random secret with 32+ characters
- `NEXT_PUBLIC_WHATSAPP_NUMBER=919133509293`

Do not commit `.env.local`, credentials, database files or auth tokens. Set production variables in the hosting provider's environment settings and redeploy. The app uses the same SQLite schema locally and on Turso.

## Lead management
Website contact/quote submissions are validated and inserted into the `leads` table before the WhatsApp handoff. Admins can sign in at `/admin/login`, search and filter leads, inspect contact details, update status (new/contacted/quoted/won/lost), and export the current filtered results as CSV. Admin API routes require an eight-hour signed, HTTP-only session cookie.

## Source and image provenance
Known business information and described Hanamakonda project details were taken from the existing website. Its original image files were not retrievable in the build environment. Illustrative/generated interior images must not be represented as verified customer project photographs. Replace with owner-approved photos when available.

## Launch checklist
- Configure production Turso and admin secrets as described above.
- Test a real enquiry, database persistence, admin login, status updates and CSV export.
- Test WhatsApp handoff on mobile.
- Confirm original project photos, testimonials, address and hours with the business owner.
- Run the GitHub Actions build and a Lighthouse audit after deployment.
