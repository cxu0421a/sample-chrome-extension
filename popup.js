// Assign display setting storage key 

const dispSetStrKey = 'Display-setting';    // TODO: move storage functions and keys to own module.

// Get a saved setting
function getSavedSetting(key, callback) {
  chrome.storage.sync.get(key, (items) => {
    callback(chrome.runtime.lastError ? true : items[key]);
  });
}

// Save a setting
function saveSetting(key, setting) {
  var items = {};
  items[key] = setting;
  chrome.storage.sync.set(items);
}

// Turn display on/off based on current setting
function toggleDisplay(currentSetting) {
  const setting = currentSetting ? "inline" : "none";
  const script = "var fpBlocks = document.getElementsByClassName('fp-block'); " +
    "for (let i = 0; i < fpBlocks.length; i++) {" +
    " fpBlocks[i].style.display = '" + setting + "';" +
    "}";
  chrome.tabs.executeScript({
    code: script,
  });
}

// Add event listener on DOM loaded to revert to load saved display setting
// and futher event listener to update setting on checkbox change. Updates 
// savedto synced storage.
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('displayFP');

  getSavedSetting(dispSetStrKey, (savedSetting) => {
    toggleDisplay(savedSetting);
    checkbox.checked = savedSetting;
  });

  // Add event listener for checkbox setting change 
  checkbox.addEventListener('change', (event) => {
    const newSetting = event.target.checked;
    toggleDisplay(newSetting);
    saveSetting(dispSetStrKey, newSetting);
  });
});