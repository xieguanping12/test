var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send('hello world');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址http://%s:%s', host, port);
});