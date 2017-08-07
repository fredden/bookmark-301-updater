# Bookmark 301 Updater
Automatically update bookmarks for permanently moved resources, while browsing

---
## About
Every time you visit a page which the server reports as permanently moved, this extension will search for bookmarks for to the old page, and update the URL for the new page.

All status codes other than 301 are ignored. This includes 200, 404, 403, 500, etc.

It's worth noting that, [HSTS (HTTP Strict Transport Security)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) upgrades aren't detected by the extension, as these don't generate a 301 from the server. (They happen client side.)

The extension updates the URL only - no changes are made to tags, folders/directories, title, description, etc.

---
## Usage
The extension is available for [Firefox] (https://addons.mozilla.org/EN-US/firefox/addon/bookmark-301-updater/). A Chrome version of this extension is coming soon.