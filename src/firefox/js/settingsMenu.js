browser.contextMenus.removeAll();
browser.contextMenus.create({
  id: "showBaseStats",
  title: "Show Base Stats",
  type: "checkbox",
  contexts: ["action"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "showBaseStats") {
    const checkedString = info.checked ? 'ON' : 'OFF';
    browser.storage.local.set({ 'showBaseStats': checkedString });
  }
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage") {
      browser.storage.local.get(request.key).then((result) => {
        sendResponse({data: result[request.key]});
      });
      return true;
    }
    else {
      sendResponse({});
    }
});
