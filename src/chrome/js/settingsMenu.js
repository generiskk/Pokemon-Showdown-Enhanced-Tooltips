chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: "showBaseStats",
  title: "Show Base Stats",
  type: "checkbox",
  contexts: ["action"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "showBaseStats") {
    const checkedString = info.checked ? 'ON' : 'OFF';
    chrome.storage.local.set({ 'showBaseStats': checkedString });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage") {
      chrome.storage.local.get(request.key).then((result) => {
        sendResponse({data: result[request.key]});
      });
      return true;
    }
    else {
      sendResponse({});
    }
});
