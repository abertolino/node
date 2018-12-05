//const http = require('http');
//const dt = require('./modules');
const otherMods = require('./other_modules');
////const url = require('url');
//const fs = require('fs');
//const uc = require('upper-case');
//const events = require('events');
//const formidable = require('formidable');
//const nodemailer = require('nodemailer');
//const mongo = require('mongodb');
//const express = require('express');     // include express module

//const eventEmitter = new events.EventEmitter();

//const hostname = '127.0.0.1';
//const port = 3000;

var tut = new otherMods.Nodetutorial();     // create and save object
tut.pTutor();   // call function on object

//console.log(dt.AddNumber(1, 2));
//var app = express();    // express object created

//app.set('view engine', 'jade');     // set the templating engine - a templating engine is an approach for injecting values in an application by picking up data from data files

//app.get('/', function (req, res) {

//});

//var server = app.listen(3000, function () {

//});

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost/mydb";

//MongoClient.connect(url, function (err, db) {
//    if (err) throw err;
//    var dbo = db.db("mydb");
//    var ordersObj = [
//        { _id: 1, product_id: 154, status: 1}
//    ];
//    var productsObj = [
//        { _id: 154, name: 'Chocolate Heaven' },
//        { _id: 155, name: 'Tasty Lemons' },
//        { _id: 156, name: 'Vanilla Dreams'}
//    ];
//    var myobj = [
//        { name: 'John', address: 'Highway 71' },
//        { name: 'Peter', address: 'Lowstreet 4' },
//        { name: 'Amy', address: 'Apple st 652' },
//        { name: 'Hannah', address: 'Mountain 21' },
//        { name: 'Michael', address: 'Valley 345' },
//        { name: 'Sandy', address: 'Ocean blvd 2' },
//        { name: 'Betty', address: 'Green Grass 1' },
//        { name: 'Richard', address: 'Sky st 331' },
//        { name: 'Susan', address: 'One way 98' },
//        { name: 'Vicky', address: 'Yellow Garden 2' },
//        { name: 'Ben', address: 'Park Lane 38' },
//        { name: 'William', address: 'Central st 954' },
//        { name: 'Chuck', address: 'Main Road 989' },
//        { name: 'Viola', address: 'Sideway 1633' }
//    ];
//    var query = { address: /^S/ };
//    var newvalues = { $set: { name: "Minnie" } };
//    var mysort = { name: 1 };   // 1: ascending, -1: descending
//    var included = { projection: { _id: 0, address: 1 } };
//    dbo.collection("orders").aggregate([
//        {
//            $lookup:
//            {
//                from: 'products',
//                localField: 'product_id',
//                foreignField: '_id',
//                as: 'orderdetails'
//            }
//        }
//    ]).toArray(function (err, res) {
//        if (err) throw err;
//        console.log(JSON.stringify(res));
//        db.close();
//    });
//});

//const server = http.createServer((req, res) => {
//    if (req.url == '/fileupload') {
//        var form = new formidable.IncomingForm();
//        form.parse(req, function (err, fields, files) {
//            var oldpath = files.filetoupload.path;
//            var newpath = 'C:/Users/abertolino/Documents/testing/' + files.filetoupload.name;
//            fs.rename(oldpath, newpath, function (err) {
//                if (err) throw err;
//                res.write('File uploaded and moved!');
//                res.end();
//            });
//        });
//    } else {
//        res.writeHead(200, { 'Content-Type': 'text/html' });
//        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//        res.write('<input type="file" name="filetoupload"><br>');
//        res.write('<input type="submit">');
//        res.write('</form>');
//        return res.end();
//    }
//});

//// create reusable transporter object using the default SMTP transport
//nodemailer.createTestAccount((err, account) => {
//    let transporter = nodemailer.createTransport({
//        host: 'smtp.ethereal.email',
//        port: 587,
//        secure: false, // true for 465, false for other ports
//        auth: {
//            user: account.user, // generated ethereal user
//            pass: account.pass // generated ethereal password
//        },
//        tls: {
//            rejectUnauthorized: false
//        }
//    });

//    var mailOptions = {
//        from: '"Fred Foo" <foo@example.com>',
//        to: 'anthonybertolino28@gmail.com',
//        subject: 'Sending Email using Node.js',
//        text: 'That was easy!'
//    };

//    transporter.sendMail(mailOptions, function (error, info) {
//        if (error) {
//            console.log(error);
//        } else {
//            console.log('Email sent: ' + info.response);
//        }
//    });
//});

// create an event handler
//var myEventHandler = function () {
//    console.log('I hear a scream!');
//}

//// assign the event handler to an event:
//eventEmitter.on('scream', myEventHandler);

//// fire the 'scream' event:
//eventEmitter.emit('scream');

//server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//});