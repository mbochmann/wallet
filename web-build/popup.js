var popupMenu = window.open(
    chrome.runtime.getURL("index.html"),
    "wallet",
    "width=400,height=600"
);
window.close();