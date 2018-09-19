var http = require('http');
var queryString = require('querystring');

var postHTML =
    '<html>' +
    '<head><meta charset="UTF-8"><title>菜鸟教程 Node.js</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名:<input name="name"><br/>' +
    '网站url:<input name="url"><br/>' +
    '<input type="submit">' +
    '</form>' +
    '</body>' +
    '</html>';

http.createServer(function (request, response) {
    var body = '';
    request.on('data',function (chunk) {
        body+=chunk;
    });
    request.on('end',function () {
        body=queryString.parse(body);
        response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        if (body.name && body.url) {
            response.write("网站名 "+body.name);
            response.write("<br/>");
            response.write("网站url "+ body.url);
        } else {
            response.write(postHTML);
        }
        response.end();
    });
}).listen(3000);