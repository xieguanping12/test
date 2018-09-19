var app=require('express')();
var http = require('http');
var url = require('url');
var util = require('util');
var bodyParser=require('body-parser');
var multer =require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/',function (req, res) {
    console.log(req.body);
    res.json(req.body);
});

http.createServer(function (request, response) {
    response.writeHead(200,{
        'Content-type':'text/plain;charset=utf-8'
    });
    var params = url.parse(request.url,true).query;
    response.write("网站名: "+params.name);
    response.write("\n");
    response.write("网站url: "+params.url);
    response.write("\n");
    response.end(util.inspect(url.parse(request.url,true)));
}).listen(3000);