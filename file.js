var fs = require('fs');
// fs.readFile('input.txt',function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//
//     console.log('异步读取 '+data.toString());
// });
//
// var data = fs.readFileSync('input.txt');
// console.log('同步读取 '+data.toString());
//
// console.log('程序执行完毕');

// console.log('准备打开文件');
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log('读取文件信息成功');
//
//     console.log('是不是文件 ' + stats.isFile());
//     console.log('是不是目录 ' + stats.isDirectory());
// });
//
// console.log('准备写入文件');
// fs.writeFile('input.txt', '我是通过fs.writeFile写入文件的内容', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//
//     console.log('数据写入成功');
//     console.log('-----我是分割线-----');
//     console.log('读取写入文件');
//     fs.readFile('input.txt', function (err1, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log('异步读取文件数据 ' + data.toString());
//     });
// });

console.log('创建目录/tmp/test');
fs.mkdir('/tmp/test',function (err) {
    if (err){
        return console.error(err);
    }
    console.log('目录创建成功');
});

