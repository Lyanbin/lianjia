const request = require('request');

function getProxy() {
    request({
           url: `http://api.xicidaili.com/free2016.txt`,
           headers: {
               'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.3 (KHTML, like Gecko) Chrome/55.0.2883.9 Safari/537.3'
           }
    }, (err, response, body) => {
         if (!err && response.statusCode == 200) {
             let data = response.body;
             let arr = data.split('\r\n');
             if (arr.length > 1) {
                 console.log(`获取代理成功，共抓取到${arr.length}个IP！`);
             }
         } else {
             console.log(`代理获取失败！`);
         }
    });
}

module.exports = getProxy;
