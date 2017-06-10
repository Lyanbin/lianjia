const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('test')
});




module.exports = router;
