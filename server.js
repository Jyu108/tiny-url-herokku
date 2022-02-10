const express = require("express");
const path = require('path');
const urls = require("./routes/url");
//const { index } = require("./views/pages");
//const UrlDao = require("./data/UrlDao");
const db = require("./data/db");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

db.connect();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*
app.get("/", (_req, res) => {
    res.send("TinyURL API!");
});*/

app.use(urls)


app.listen(port, () => {
    console.log(`Express app listening at port: http://localhost:${port}/`);
});
