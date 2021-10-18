# Field Maps Link to Web Map
Javascript for redirecting a link shared from Esri's Field Maps app to a Web Maps link usable in your desktop browser.

## Background
Esri's [Field Maps app](https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/overview) currently has the functionality to share links from within the app. The link centers and zooms the viewer in to the area where the map was in the app when the user clicked share. This is helpful except that the link doesn't work from a desktop app. This Javascript code can be saved as a bookmarklet and will parse the Field Maps link into a Web Maps link.  

## To use
It will not work as posted without some modification! I wrote this for my company's ArcGIS Enterprise instance so you need to modify the `web_link_base` variable to be appropriate for your situation.  
See [this Esri ArcGIS Enterprise support page for details on components of links to items](https://enterprise.arcgis.com/en/portal/latest/use/link-to-items.htm#ESRI_SECTION1_BEB29D2E6835463F8A750E10B325CEE6)

After you've correctly set `web_link_base`, create a new bookmark in your web browser. Paste the whole javascript file as the URL of the bookmark. Now when you navigate to links shared to you from Field Maps, you can let the page load, then click your new bookmarklet and it will redirect the page to the same item as a Web Map, centered on the same location.
