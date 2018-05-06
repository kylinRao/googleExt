// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
    // 这里存储了一个color变量
    chrome.storage.sync.set({color: '#3aa757'}, function () {
        console.log("The color is green.");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'nj.lianjia.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null,
        {code: "document.body.bgColor='red'"});
});
//监听消息
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.content.method == "getHousePrice") {
            //ajax发送请求房子的最近价格
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://tmp.tunnel.echomod.cn/thirdApi", false);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;")
            //如果是异步请求的话使用监听事件的方式可以获得，我们这里为了让contenscript能够拿到网络返回的数据，只能使用同步请求方式
            //xhr.onreadystatechange = function () {
            //    if (xhr.readyState == 4) {
            //        // JSON.parse does not evaluate the attacker's scripts.
            //        var resp = JSON.parse(xhr.responseText);
            //        sendResponse({farewell: resp});
            //
            //        chrome.storage.sync.set({color: resp}, function() {
            //        console.log(resp);
            //    })
            //  }
            //}
            xhr.send("method=server.chromeExtApi.getHousePrice&houseCode="+request.content.houseCode);

            sendResponse({farewell: JSON.parse(xhr.responseText)});

        }
        ;
    });