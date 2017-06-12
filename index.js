const express = require('express');
const router = require('./routes');
const config = require('./config');
const parser = require('./parser/lianjialist');
const getProxy = require('./parser/proxy');
let app = express();
// 监听端口，启动程序
app.use('/', router);

app.listen(config.port, function () {
    console.log(`listening on port ${config.port}`);
});


// for (let i = 1; i < 20; i++) {
//     parser(i);
// }
const http = require('http');
async function ab() {
    await http.get('http://www.baidu.com/', (res) => {
        console.log('1');

    });

    console.log('2');
}
ab();

console.log('3');
getProxy();
