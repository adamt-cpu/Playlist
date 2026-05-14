const express = require('express');
const request = require('request');
const app = express();

app.get('/mbc1', (req, res) => {
    const url = 'https://shd-gcp-live-orng.shahid.net/live/bitmovin-mbc-1-na/eec141533c90dd34722c503a296dd0d8/index.m3u8';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/x-mpegURL');
    req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
