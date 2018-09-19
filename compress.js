var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.tar.gz'));
console.log('文件压缩完成');