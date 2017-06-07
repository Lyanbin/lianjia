const express = require('express');
const request = require('request');
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
        }
    });
});




module.exports = router;