const _sum1 = document.querySelector(".summary");
const _button = document.createElement('button');
_button.textContent = "click me";
_button.onclick = () => clickAction();
_sum1.insertBefore(_button, _sum1.firstChild);

const _notice = document.createElement('div');
_notice.style.backgroundColor = "yellow";
_notice.id = "FP-notice-div"
_notice.textContent = "I'm here.";
_sum1.insertBefore(_notice, _sum1.children[1]);

function clickAction() {
  let greeting = prompt('Say hi to the app.', 'hi');
  let msg = {greeting: greeting};
  _notice.textContent = msg.greeting;
  console.log(_notice.textContent);
  chrome.runtime.sendMessage(msg, (response) => {
    _notice.textContent = response.farewell;
    console.log(_notice.textContent);
  });
}




/* ---------- End of Code ----------- */

/* ---------- Next steps: -----------
 - Inject blocks into full question pages
 - Learn SE APIs and make blocks display first num of question ID
 - Make the script function on click, or even better -- on check box from popup
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

*/