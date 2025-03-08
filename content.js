chrome.runtime.sendMessage({ action: "yourAction" }, function(response) {
    if (response) {
        if (response.result === "success") {
            console.log("成功回應:", response.data);
            // 處理成功回應
        } else if (response.result === "error") {
            console.error("錯誤回應:", response.message);
            // 處理錯誤回應
        }
    } else {
        console.error("未收到回應");
    }
});