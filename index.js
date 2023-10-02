const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/download', (req,res) => {
    let URL = req.query.URL;

    let splitTitle = URL.split("/watch?v=");
    let finalV = splitTitle.at(1);

    res.header('Content-Disposition', `attachment; filename="${finalV}.mp3"`);
    ytdl(URL, {
        filter: 'audioonly',
        format: 'mp3'
    }).pipe(res);
});