
// Event fires on each new page loaded
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Enable extension on SO Questions pages only
  if (tab.url.match(/stackoverflow\.com\/questions/))  {
    chrome.pageAction.show(tabId)

    // Send inital display setting to content-script
    const dispSetStrKey = 'Display-setting';
    chrome.storage.sync.get(dispSetStrKey, (items) => {
      const savedDispSet = chrome.runtime.lastError ? true : items[dispSetStrKey];
      const message = {savedDispSet: savedDispSet ? "inline" : "none"} 
      chrome.tabs.sendMessage(tabId, message);
    });
  }
});


// Assign display setting storage key

// Get a saved setting
function getSavedSetting(key, callback) {
  chrome.storage.sync.get(key, (items) => {
    callback(chrome.runtime.lastError ? true : items[key]);
  });
}




/* ----- End of Code ----- */

/* ----- Unused Code  -----

--- Sample messaging function ---

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => 
  {
    if (request.greeting)
      sendResponse({farewell: "goodbye"});
  }
);

--- End of function ---
 */