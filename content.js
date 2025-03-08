chrome.runtime.sendMessage({ action: "yourAction" }, function(response) {
    if (response) {
        if (response.result === "success") {
            console.log("成功回應:", response.data);
        } else if (response.result === "error") {
            console.error("錯誤回應:", response.message);
        }
    } else {
        console.error("未收到回應");
    }
});
