# ApplianceScout — Houston directory starter

A static HTML/CSS/JavaScript directory. No npm, framework, backend, or paid database is required.

## Run it immediately

1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Search and filter the eight retailer-location records.

The store data is embedded in `stores.js`, so the site works from a local file without a local server.

## What's included

- `index.html` — homepage and searchable directory
- `styles.css` — responsive visual design
- `app.js` — search, city/category filters, detail dialog
- `stores.js` — eight source-linked retailer locations
- `about.html`, `buying-guide.html`, `privacy.html`, `disclaimer.html`, `contact.html`
- `robots.txt`, `sitemap.xml`, `ads.txt`, `favicon.svg`

## Important data-quality warning

The public directory contains only eight locations selected from the research set because there was evidence of scratch-and-dent/open-box offerings from retailer sources. This does NOT mean current inventory at every branch is guaranteed. Some branch addresses and phone numbers came from public business research and should be reconfirmed with the retailer. The site deliberately tells visitors to call before travelling.

Do not add the other unverified candidate businesses as confirmed scratch-and-dent retailers. Verify them directly first.

## Before publishing

1. Search all pages for `YOUR-DOMAIN.example` and replace it with the final HTTPS domain.
2. In `contact.html`, replace `YOUR-CONTACT-EMAIL@example.com` with an email address you control.
3. Review each listing's address and phone number directly with the retailer.
4. Confirm the site title, description, and canonical URLs after choosing the domain.
5. Update `sitemap.xml` and `robots.txt` with the real domain.
6. Upload the folder to a public GitHub repository.
7. In GitHub: Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
8. Wait for the published Pages URL, open it on desktop and mobile, and check every link.
9. Add the published URL to Google Search Console and submit `/sitemap.xml`.

GitHub Pages documentation: https://docs.github.com/en/pages

## Advertising

Ad slots in the HTML are visual placeholders only. No ad network is connected and no money is earned from them.

To use Google AdSense:
- The site must be live, accessible, original/useful, and comply with AdSense policies.
- Apply using the adult site owner's Google Account. AdSense applicants must be 18+. If the site operator is under 18, a parent or guardian must own/manage the AdSense account and receive payments.
- After approval, follow the AdSense instructions to add the site verification script in the `<head>` of `index.html` and replace the ad placeholders with the exact ad-unit code supplied in the account.
- Add the exact `ads.txt` line provided by AdSense to `ads.txt`.
- Update the privacy policy and implement any required consent/privacy controls for the audiences and regions you serve.
- Never click your own ads or ask anyone to click them.

AdSense readiness guidance:
https://support.google.com/adsense/answer/7299563
Eligibility:
https://support.google.com/adsense/answer/9724

Do not apply while the site is only a template or has thin content. The directory should have useful original information and a good user experience first.

## SEO notes

The site includes page titles, descriptions, headings, internal links, a sitemap template, robots file, and WebSite structured data. SEO cannot be made "perfect" or guaranteed. Search ranking depends on competition, crawlability, quality, authority, and usefulness over time.

Before going live, replace the placeholder canonical/domain values. Add unique original pages for individual retailers only when you have enough verified information to make each page genuinely useful. Do not mass-produce thin city/store pages.

## Customization

Edit `stores.js` to add or update records. Each record should contain:
- `id`, `name`, `branch`, `address`, `phone`
- `city`, `area`, `categories`, `offerings`
- `evidence`, `source`, `sourceLabel`, `notes`

Keep `source` pointed to a retailer-owned page whenever possible. Update the visible evidence statement when the source changes.
