// Assign display setting storage key
const dispSetStrKey = 'Display-setting';

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

export { dispSetStrKey, getSavedSetting, saveSetting };