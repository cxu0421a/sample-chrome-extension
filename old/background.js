 
// When to show the extentsion
/* function displayButton() {
  chrome.tabs.query({url: "https://stackoverflow.com/questions*"}, (tabs) => {
    var matchingTabs = tabs;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (matchingTabs.indexOf(tabs[0] === -1)) {
        chrome.pageAction.hide(tabs[0].id)
      }
      else {
        chrome.pageAction.show(tabs[0].id)
      }
    })
  })
}; */
/* 
// Check display on start
displayButton();

// Check display on reload
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if (change.status == "complete") {
    displayButton();
  }
});

// Check display on changed tab
chrome.tabs.onSelectionChanged.addListener((tabId, info) => {
  displayButton();
});

function displayButton() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => chrome.pageAction.show(tabs[0].id))
}

// chrome.pageAction.onClicked.addListener(setBountBlocks());

Script run on click
chrome.pageAction.onClicked.addListener(() => chrome.runtime.sendMessage({})); */

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});

// chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
//   if (change.status == "complete") {
//     updateAddress(tabId);
//   }
// });

// chrome.tabs.executeScript({
//   code: "console.log('I work');"
// })

chrome.extension.getBackgroundPage().console.log('foo');