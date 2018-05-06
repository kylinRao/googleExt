let changeColor = document.getElementById('changeColor');
// 从存储中获取color变量
  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    // 设置意颜色变量到button的value属性里面去
    changeColor.setAttribute('value', data.color);
  });
  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };