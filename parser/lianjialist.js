const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

// function connectMongo() {
//     mongoose.connect('mongodb://localhost/lybtest');
//     let Schema = mongoose.Schema,
//     ObjectId = Schema.ObjectId;
//
//     let BlogPost = new Schema({
//         author    : ObjectId,
//         title     : String,
//         body      : String,
//         date      : Date
//     });
//     console.log(BlogPost);
//
// }

function _parserData($object) {
    let tempObj = {};
    tempObj.url = $object.find('.title').find('a').attr('href');
    tempObj.name = $object.find('.title').find('a').text();
    tempObj.xiaoqu = $object.find('.address').find('a').text();
    tempObj.xiaoquUrl = $object.find('.address').find('a').attr('href');
    tempObj.houseInfo = $object.find('.address').find('.houseInfo').text();
    tempObj.areaUrl = $object.find('.positionInfo').find('a').attr('href');
    tempObj.area = $object.find('.positionInfo').find('a').text();
    tempObj.totalPrice = $object.find('.totalPrice').find('span').text();
    tempObj.unitPrice = $object.find('.unitPrice').attr('data-price');
    tempObj.id = $object.find('.unitPrice').attr('data-hid');
    tempObj.xiaoquId = $object.find('.unitPrice').attr('data-rid');
    tempObj.img = $object.find('.img').find('img').attr('data-original');
    return tempObj;
}
function parserList(page, proxy) {
    console.log(`开始获取第${page}页数据...`);
    return new Promise((resolve, reject) => {
        request({
               url: `http://bj.lianjia.com/ershoufang/pg${page}/`,
               // 代理不好用
               // proxy: `http://${proxy}`,
               // timeout: 5000,
               headers: {
                   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.3 (KHTML, like Gecko) Chrome/55.0.2883.9 Safari/537.3'
               }
        }, (err, response, body) => {
             if (!err && response.statusCode == 200) {
                 let arr = [];
                 let $ = cheerio.load(body);
                 let list = $('.sellListContent li');
                 list.map((index, temp) => {
                     let item = list.eq(index);
                     let tempObj = _parserData(item);
                     arr.push(tempObj);
                 });
                 console.log(`第${page}页抓取完毕，一共获取${arr.length}条数据！`);
                 resolve();
             } else {
                 console.log(`第${page}页抓取失败！错误信息${err}`);
                 reject();
             }
        });
    })
}

module.exports = parserList;
