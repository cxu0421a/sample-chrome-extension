
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

setBountBlocks();

/* ---------- End of Code ----------- */

/* ---------- Next steps: -----------
 - Learn SE APIs and make blocks display first num of question ID
 - Make the script function on click, or even better -- on check box from popup
*/



/* --------- Unused code below ------
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  sendResponse(setBountBlocks())
});

chrome.pageAction.onClicked.addListener(setBountBlocks());
 */