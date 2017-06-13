chrome.contextMenus.create({
    title: "GoogleMapで検索",
    onclick: function(info, tab) { 
        chrome.tabs.create({
            url:"https://www.google.co.jp/maps/search/" + info.selectionText + "/"
        })
    }
});