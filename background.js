chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "yourAction") {
    // 執行一些非同步任務
    setTimeout(function() {
      sendResponse({ result: "success" });
    }, 1000);
    return true; 
  }
});
