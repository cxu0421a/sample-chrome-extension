
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
  fpBlock.style.cssText = "background-color: green; color: white; width: fit-content; display: none; padding: 2px";   // Display setting defaults to none, then loaded from storage
  fpBlock.textContent = (Math.random() * 10).toFixed(2) + " CBC";    // Random filler bounty
  
  _sums[i].insertBefore(fpBlock, _sums[i].firstChild);
}

// Saved display setting is loaded
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.savedDispSet) {
    var fpBlocks = document.getElementsByClassName('fp-block');
    for (let i = 0; i < fpBlocks.length; i++) {
      fpBlocks[i].style.display = request.savedDispSet;
      }
  }
});

/* ---------- End of Code ----------- */

/* ---------- Next steps: -----------
 - Inject blocks into homepage
 - Inject blocks into full question pages
 - Learn SE APIs and make blocks display first num of question ID
*/

/* --------- Unused code below ------

chrome.pageAction.onClicked.addListener(setBountBlocks());

function update() {
  const fpBlocks = document.getElementsByClassName('fp-block');
  
  for (let i = 0; i < fpBlocks.length; i++) {
    fpBlocks[i].textContent = (Math.random() * 10).toFixed(2) + " CBC";
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
});

*/