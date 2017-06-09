const express = require('express');
const router = require('./routes');
const config = require('./config');

let app = express();
// 监听端口，启动程序
// 
app.use('/', router);


app.listen(config.port, function () {
    console.log(`listening on port ${config.port}`);
});