var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var url = 'mongodb://localhost:27017/';
var app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    MongoClient.connect(url, function(err, client) {



        var cursor = client.db('Service').collection('Service').find();


        var send = [];

        console.log(cursor["collection"]);
        cursor.forEach((err, doc) => {
            if (doc != null) {
                send.push(doc);
                console.log(doc.title);
            }
            res.render('homepage', [{
                "send": doc
            }])





        }, (err) => {
            console.log(err);
        });
        // console.log(send)
        // $("#data").html(data);
    });

});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`System is on port  `);
});