const express = require('express');
const request = require('request');
const app = express();

app.get('/mbc1', (req, res) => {
    const url = 'https://shd-gcp-live-orng.shahid.net/live/bitmovin-mbc-1-na/eec141533c90dd34722c503a296dd0d8/index.m3u8';
    
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://shahid.mbc.net/',
        'Origin': 'https://shahid.mbc.net'
    };

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/x-mpegURL');

    request({ url, headers }).pipe(res);
});

app.listen(process.env.PORT || 3000);
