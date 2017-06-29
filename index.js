const express = require('express');
const router = require('./routes');
const config = require('./config');
const parser = require('./parser/lianjialist');
const getProxy = require('./parser/proxy');

const mongoose = require('mongoose');


let app = express();
// 监听端口，启动程序
app.use('/', router);

app.listen(config.port, function () {
    console.log(`listening on port ${config.port}`);
});

//
// mongoose.connect('mongodb://localhost/lybtest');
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, '错误了。。。'));
// db.once('open', () => {
//     console.log('你好，Mogo!');
// });
// let Schema = mongoose.Schema,
// let HouseSchema = new Schema({
//     url    : String,
//     name     : String,
//     xiaoqu     : String,
//     xiaoquUrl     : String,
//     houseInfo     : String,
//     areaUrl     : String,
//     area     : String,
//     totalPrice     : String,
//     unitPrice     : String,
//     id     : String,
//     xiaoquId     : String,
//     img     : String,
// });
// var HouseModel = mongoose.model('house', { name: String });
//



// async function ab() {
//     //这里的关键是await后面要跟一个Promise
//     let ips = await getProxy();
//     let ipNum = ips.length;
//     for (let i = 1; i < 300; i++) {
//         await parser(i, ips[i % ipNum]);
//     }
// }
// ab();
