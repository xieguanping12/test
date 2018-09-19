// var  fs=require('fs');
// var  data=fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log('程序执行结束');

// var fs=require('fs');
// fs.readFile('input.txt',function (err, data) {
//     if (err) {
//         return console.error(err.stack);
//     }
//     console.log(data.toString());
// });
//
// console.log('程序执行结束');

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
//
// var connectHandler=function connected() {
//     console.log('连接成功');
//     eventEmitter.emit('data_received');
// }
//
// eventEmitter.on('connection',connectHandler);
//
// eventEmitter.on('data_received',function () {
//     console.log('数据接收成功');
// });
//
// eventEmitter.emit('connection');
// console.log("程序执行完毕");


// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var listener1=function listener1() {
//     console.log('监听器listener1执行');
// }
//
// var listener2=function listener2() {
//     console.log('监听器listener2执行');
// }
// eventEmitter.addListener('connection',listener1);
// eventEmitter.on('connection',listener2);
// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners+'个监听器监听连接事件');
//
// eventEmitter.emit('connection');
//
// eventEmitter.removeListener('connection',listener1);
// console.log('listener1不再受监听');
// eventEmitter.emit('connection');
//
// eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners+'个监听器在监听连接事件');
//
// console.log('程序执行完毕');

// var events = require('events')
// var emitter = new events.EventEmitter();
// emitter.on('error',function () {
//     console.log(555555);
// })
// emitter.emit('error');

// var buf = Buffer.from('runoob','ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// var fs = require('fs');
// var readerStream = fs.createReadStream('input.txt');
// var writerStream = fs.createWriteStream('output.txt');
// readerStream.pipe(writerStream);
// console.log('程序执行完毕');

// var hello = require('./hello');
// hello.world();

// var Hello = require('./hello');
// hello = new Hello;
// hello.setName('BYVoid');
// hello.sayHello();


console.log(__filename);
console.log(__dirname);

function printHello() {
    console.log('Hello world');
}

// t=setTimeout(printHello,2000);
// clearTimeout(t);

ti=setInterval(printHello,2000);
clearInterval(ti);
