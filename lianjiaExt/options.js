  //let page = document.getElementById('buttonDiv');
  //const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  //function constructOptions(kButtonColors) {
  //  for (let item of kButtonColors) {
  //    let button = document.createElement('button');
  //    button.style.backgroundColor = item;
  //    button.addEventListener('click', function() {
  //          //ajax发送请求房子的最近价格
  //  var xhr = new XMLHttpRequest();
  //  xhr.open("POST", "http://tmp.tunnel.echomod.cn/thirdApi", true);
  //  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;")
  //  xhr.onreadystatechange = function () {
  //      if (xhr.readyState == 4) {
  //          // JSON.parse does not evaluate the attacker's scripts.
  //          var resp = JSON.parse(xhr.responseText);
  //
  //          chrome.storage.sync.set({color: resp}, function() {
  //          console.log(resp);
  //      })
  //    }
  //
  //  }
  //  xhr.send("method=server.chromeExtApi.getHousePrice&houseCode=103102299586");
  //
  //
  //
  //
  //
  //
  //
  //      chrome.storage.sync.set({color: item}, function() {
  //        console.log('color is ' + item);
  //      })
  //    });
  //    page.appendChild(button);
  //  }
  //}
  //constructOptions(kButtonColors);