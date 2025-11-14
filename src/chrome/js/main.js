function updateSettings(showBaseStats) {
  window.dispatchEvent(new CustomEvent('__SHOWDOWN_SETTINGS_UPDATE__', {
    detail: { showBaseStats: showBaseStats }
  }));
}

chrome.runtime.sendMessage({method: "getLocalStorage", key: "showBaseStats"}, function (response) {
  const setting = response.data || 'OFF';

  document.documentElement.setAttribute('data-showdown-settings', JSON.stringify({
    showBaseStats: setting
  }));

  var ele = document.createElement("script");
  ele.src = chrome.runtime.getURL("/js/showPokemonTooltip.js");
  document.documentElement.appendChild(ele);
});

chrome.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === 'local' && changes.showBaseStats) {
    const currentSettings = JSON.parse(document.documentElement.getAttribute('data-showdown-settings') || '{}');
    currentSettings.showBaseStats = changes.showBaseStats.newValue;
    document.documentElement.setAttribute('data-showdown-settings', JSON.stringify(currentSettings));

    updateSettings(changes.showBaseStats.newValue);
  }
});
