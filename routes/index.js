const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const router = express.Router();

router.get('/test', (req, res, next) => {
    return request({
        url: 'http://bj.lianjia.com/ershoufang/pg1/',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.3 (KHTML, like Gecko) Chrome/55.0.2883.9 Safari/537.3'
        }
    }, (err, response, body) => {
        if (!err && response.statusCode == 200) {
            res.send(body);
            let arr = [];
            let $ = cheerio.load(body);
            let list = $('.sellListContent li');
            list.map((index, temp) => {
                let tempObj = {};
                let item = list.eq(index);
                tempObj.url = item.find('.title').find('a').attr('href');
                tempObj.name = item.find('.title').find('a').text();
                tempObj.xiaoqu = item.find('.address').find('a').text();
                tempObj.xiaoquUrl = item.find('.address').find('a').attr('href');
                tempObj.houseInfo = item.find('.address').find('.houseInfo').text();
                tempObj.areaUrl = item.find('.positionInfo').find('a').attr('href');
                tempObj.area = item.find('.positionInfo').find('a').text();
                tempObj.totalPrice = item.find('.totalPrice').find('span').text();
                tempObj.unitPrice = item.find('.unitPrice').attr('data-price');
                tempObj.id = item.find('.unitPrice').attr('data-hid');
                tempObj.xiaoquId = item.find('.unitPrice').attr('data-rid');
                tempObj.img = item.find('.img').find('img').attr('data-original')
                arr.push(tempObj);
            });
            console.log(arr);
        }
    });
});




module.exports = router;