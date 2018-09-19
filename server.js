// // var http=require('http');
// //
// // http.createServer(function (request,response) {
// //     response.writeHead(200,{'Content-Type':'text/plain'});
// //     response.end('hello node');
// // }).listen(8888);
// //
// // console.log('Server running at http://127.0.0.1:8888/');
//
// // var http = require('http');
// // var url = require('url');
// //
// // function start(route) {
// //     function onRequest(request, response) {
// //         var pathname = url.parse(request.url).pathname;
// //         console.log("Request for " + pathname + " received");
// //         route(pathname);
// //         response.writeHead(200, {"Content-Type": "text/plain"});
// //         response.write("Hello World");
// //         response.end();
// //     }
// //
// //     http.createServer(onRequest).listen(8888);
// //     console.log('Server has started');
// // }
// //
// // exports.start = start;
//
//
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
//
// http.createServer(function (request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " Received.");
//
//     fs.readFile(pathname.substr(1), function (err, data) {
//         if (err) {
//             console.log(err);
//             response.writeHead(404, {'Content-Type': 'text/html'});
//         } else {
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(data.toString());
//         }
//         response.end();
//     });
// }).listen(8080);
//
// console.log('Server running at http://127.0.0.1:8080/');

var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.use(urlencodedParser);
app.use(multer({dest: '/tmp/images'}).array('image'));

app.get('/index.htm', function (request, response) {
    response.sendFile(__dirname + "/" + "index.htm");
});

app.get('/process_get', function (request, response) {
    var res = {
        "first_name": request.query.first_name,
        "last_name": request.query.last_name
    };
    console.log(res);
    response.end(JSON.stringify(res));
});

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
    };

    console.log(response);
    res.send(JSON.stringify(response));
});

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: "file upload success",
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例访问地址为：http://%s:%s', host, port);
});
