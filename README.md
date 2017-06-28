# Wikipedia Excerpts

This is a simple Chrome Extension that allows you to hover over a link to see an excerpt (first 200 characters) from that links page. 

This extension uses a hover event to trigger an AJAX request and changes the "title" attribute of the link to the excerpt. Thus Chrome will show a dialogue box with the excerpt in it.

Features to add/change:
- instead of changing title, put the excerpt in it's own box to pop-up
- this extension doesn't work on links that have the class of "mw-redirect" (I'm not sure why this is. But when you hover over a link with this class, "..." is all that pops up. I would have to do some digging to discover how to fix this)
