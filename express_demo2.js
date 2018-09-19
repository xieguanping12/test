var express = require('express');
var app = express();

app.get('/', function (request, response) {
    console.log('主页get请求');
    response.send('hello get');
});

app.post('/', function (request, response) {
    console.log('主页post请求');
    response.send('hello post');
});

app.get('/del_user', function (request, response) {
    console.log('/del_user响应delete请求');
    response.send('删除页面');
});

app.get('/list_user', function (request, response) {
    console.log('/list_user get请求');
    response.send('用户列表页面');
});

app.get('/ab*cd', function (request, response) {
    console.log('/ab*cd get请求');
    response.send('正则匹配');
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为http://%s:%s', host, port);
});