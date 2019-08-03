const path = require('path');
const bodyParser = require('body-parser');
const reqpath = path.join(__dirname + '/../');
console.log(__dirname);

const port = process.env.PORT || 3000;
const express = require('express');
const { MongoClient } = require("mongodb");
const uri = 'mongodb://localhost:27017/Service';
const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(reqpath));
var Service = require('./temp');
console.log(reqpath);
app.post('/service', function(req, res) {

    let head = req.body.Title;
    let link = req.body.link;
    let details = req.body.description;
    console.log(head, link, details);
    client.connect(function(err, client) {
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

    // app.get('/'), (req, re s) => {
    //     Service.find().then((service) => {
    //         res.send({ service });
    //     }, (err) => {
    //         console.log(err);
    //     });
    // }
});
app.listen(port, () => {
    console.log(`System is on port  ${port}`);
})