function updateSettings(showBaseStats) {
  var settingsScript = document.createElement("script");
  settingsScript.textContent = `
    if (!window.__SHOWDOWN_ENHANCED_SETTINGS__) {
      window.__SHOWDOWN_ENHANCED_SETTINGS__ = {};
    }
    window.__SHOWDOWN_ENHANCED_SETTINGS__.showBaseStats = "${showBaseStats}";
  `;
  document.documentElement.appendChild(settingsScript);
  settingsScript.remove();
}

browser.runtime.sendMessage({method: "getLocalStorage", key: "showBaseStats"}, function (response) {
  updateSettings(response.data || 'OFF');

  var ele = document.createElement("script");
  ele.src = browser.runtime.getURL("/js/showPokemonTooltip.js");
  document.documentElement.appendChild(ele);
});

browser.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === 'local' && changes.showBaseStats) {
    updateSettings(changes.showBaseStats.newValue);
  }
});
