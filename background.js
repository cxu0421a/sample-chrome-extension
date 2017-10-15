 
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

chrome.pageAction.onClicked.addListener(setBountBlocks());

function setBountBlocks() {
  
  // Get all summary blocks
  const _sums = document.getElementsByClassName('summary');
  
  // Set question name to inline to play nice with FP blocks
  for (let i = 0; i < _sums.length; i++) {
    _sums[i].querySelector('h3').style.display = "inline-block";
  }
  
  
  // Create .fp-blocks and insert in front of summary blocks
  for (let i = 0; i < _sums.length; i++) {
    let fpBlock = document.createElement('div');
    fpBlock.id = "fpb-" + i;
    fpBlock.className = "fp-block";    // Todo: move style to .css
    fpBlock.style.cssText = "background-color: green; color: white; width: fit-content; display: inline; padding: 2px";
    fpBlock.textContent = (Math.random() * 10).toFixed(2) + " CBC";    // Random filler bounty
    
    _sums[i].insertBefore(fpBlock, _sums[i].firstChild);
  }
}

// Script run on click
// chrome.pageAction.onClicked.addListener(() => chrome.runtime.sendMessage({}));