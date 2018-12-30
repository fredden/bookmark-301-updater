/* global chrome */
// Note that this does not work with HSTS. Those URLs will always stay
// not-updated, as that's not an explicit 301 from the bookmarked page.
(function () {
  'use strict'

  function process301 (responseDetails) {
    if ([301, 308].includes(responseDetails.statusCode)) {
      updateBookmarks(responseDetails.url, responseDetails.redirectUrl)
    }
  }

  function updateBookmarks (oldURL, newURL) {
    chrome.bookmarks.search({ url: oldURL }, function (bookmarkItems) {
      for (let item of bookmarkItems) {
        chrome.bookmarks.update(item.id, {
          url: newURL
        })
      }
    })
  }

  chrome.webRequest.onBeforeRedirect.addListener(
    process301,
    { urls: ['<all_urls>'] }
  )
})()
