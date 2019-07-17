const path = require('path');
const bodyParser = require('body-parser');
const reqpath = path.join(__dirname + '/../');
console.log(__dirname);

const port = process.env.PORT || 3000;
const express = require('express');
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://abhinav:abhi1604@cluster0-gl1bt.mongodb.net";
const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(reqpath));
console.log(reqpath);
app.post('/', function(req, res) {

    let head = req.body.Title;
    let link = req.body.link;
    let details = req.body.description;
    console.log(head, link, details);
    client.connect(err => {


        const data = client.db('Service').collection('Service');
        data.insertOne({
            title: head,
            url: link,
            description: details
        }, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (results) {
                console.log("insertion successful");
            }
        });
        client.close();
    })
});
app.listen(port, () => {
    console.log(`System is on port  ${port}`);
});