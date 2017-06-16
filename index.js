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
    //这里的关键是await后面要跟一个Promise
    let ips = await getProxy();
    let ipNum = ips.length;
    for (let i = 1; i < 300; i++) {
        await parser(i, ips[i % ipNum]);
    }
}
ab();
