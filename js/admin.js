const path = require('path');
const reqpath = path.join(__dirname + '/../admin');
const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');
var app = express();
var server = http.createServer(app);
app.use(express.static(reqpath));
console.log(reqpath);

server.listen(port, () => {
    console.log(`System is on port  ${port}`);
});