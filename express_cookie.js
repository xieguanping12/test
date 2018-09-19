var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log("cookie " + util.inspect(req.cookies));
    res.send('get cookie success');
});

app.listen(8081);