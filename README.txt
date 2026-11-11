Burst Pipe Repair Buffalo Grove - static site

HOW TO PUBLISH
1. Upload everything INSIDE this folder to the web root of your domain (the same place where index.html must open at https://yourdomain.com/).
   Do not upload the folder itself. If it ends up in a sub-folder, the sitemap will not be found at /sitemap.xml.
2. Open https://www.burstpiperepairbuffalogrove.com/sitemap.xml in a browser. You should see XML (a list of URLs), not your home page and not a 404.
3. In Google Search Console, open the property for https://www.burstpiperepairbuffalogrove.com (the www version, since that is what the site actually serves), go to Sitemaps and enter: sitemap.xml
   If your Search Console property is currently set up for the non-www (apex) domain instead, add a second property for the www version and submit the sitemap there, since all canonical/sitemap URLs now point to www.

HOSTED ON VERCEL:
404 PAGE: Vercel serves 404.html automatically for any static deployment when a URL does not match a file, as long as it sits at the web root alongside index.html. No extra config needed.
REDIRECTS: vercel.json (not _redirects, which Vercel ignores) lists 301 redirects for 9 old URLs that Google Search Console found as 404s, sending them to their current page.
WWW vs NON-WWW: Vercel does not use vercel.json for domain-to-domain redirects. In the Vercel dashboard, open the project -> Settings -> Domains. Make sure both burstpiperepairbuffalogrove.com and www.burstpiperepairbuffalogrove.com are added, and that www is set as the primary domain with the apex (non-www) set to redirect to it. If it is set up the other way around, switch it so it matches the canonical URLs used throughout this site (www).

PHONE: (224) 524-0772 (tel:+12245240772). To change it, search and replace it in all .html files.
FORMS: none. The reference site has no form, so contact is by phone only.
GAME: burst-pipe-game.html (assets/game.js).
