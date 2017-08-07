// Note that this does not work with HSTS. Those URLs will always stay
// not-updated, as that's not an explicit 301 from the bookmarked page.
(function() {
  'use strict';

  function no_op() {}

  function process301(responseDetails) {
    if (301 == responseDetails.statusCode) {
      updateBookmarks(responseDetails.url, responseDetails.redirectUrl);
    }
  }

  function updateBookmarks(old_url, new_url) {
    chrome.bookmarks.search({url: old_url}, updateBookmarksCallback)
    .then(updateBookmarksCallback, no_op);

    function updateBookmarksCallback(bookmarkItems) {
      for (let item of bookmarkItems) {
        chrome.bookmarks.update(item.id, {
          url: new_url
        })
        .then(no_op, no_op);
      }
    }

  }

  chrome.webRequest.onBeforeRedirect.addListener(
    process301,
    {urls: ["<all_urls>"]}
  );

})();
