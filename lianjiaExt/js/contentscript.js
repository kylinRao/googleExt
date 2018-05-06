//<script  src="js/jquery-2.1.4.min.js"></script>
var houseCode = $(document).find(".houseRecord span.info").text().replace("举报", "")
console.log(houseCode)
text = '{"method":"getHousePrice","houseCode":"' + houseCode + '"}';
var obj = JSON.parse(text);
console.log(obj);
chrome.runtime.sendMessage({content: obj}, function (response) {
    console.log("接收到消息响应，以图标方式展示该房屋最近价格");
    console.log(response.farewell);
    var iframe = '<iframe src="https://tmp.tunnel.echomod.cn/showHousePrice/' + houseCode + '" style="position:fixed;width:960px;height:180px;bottom:0;right:0;text-align:center;button:0px"></iframe>';
    //var iframe = '<iframe src="https://www.baidu.com/' + houseCode + '" style="position:fixed;width:960px;height:150px;bottom:0;right:0;text-align:center;button:0px"></iframe>';
    $('body').append(iframe);

});


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.content == "hello") {
            sendResponse({farewell: "I'm contentscript,goodbye!"});
        }
    });