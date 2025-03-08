chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "yourAction") {
    // 執行一些非同步任務
    setTimeout(function() {
      sendResponse({ result: "success" }); // 發送回應
    }, 1000);
    return true; // 表示將非同步回應
  }
});