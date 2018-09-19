var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    console.log('runoob数据库创建成功');

    var dbase = db.db('runoob');
    //创建集合
    // dbase.createCollection('site',function(err,res){
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建集合成功');
    //     db.close();
    // });

    //插入一条数据
    // var myobj ={
    //     name:'菜鸟教程',
    //     url:'www.runoob.com'
    // };
    // dbase.collection('site').insertOne(myobj,function(err,res){
    //     console.log('文档插入成功');
    //     db.close();
    // });

    //插入多条数据
    // var myobj = [
    //     {name: '菜鸟工具', url: 'runoob.com', type: 'cn'},
    //     {name: 'google', url: 'google.com', type: 'us'},
    //     {name: 'facebook', url: 'facebook.com', type: 'en'},
    // ];
    // dbase.collection('site').insertMany(myobj, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('插入文档的数量为' + res.insertedCount);
    //     db.close();
    // });

    //查询数据
    dbase.collection('site').find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        db.close();
    })


    //查询指定条件的数据
    // var whereStr = {"name": "google"};
    // dbase.collection('site').find(whereStr).toArray(function (err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(result);
    //     db.close();
    // });

    //更新一条数据
    // var whereStr = {"name": "菜鸟教程"};
    // var updateStr = {$set: {"url": "https://www.runoob.com"}};
    // dbase.collection('site').updateOne(whereStr, updateStr, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('文档更新成功');
    //     db.close();
    // });


    //更新多条数据
    // var whereStr = {"type": "en"};
    // var updateStr = {$set: {"type": "us"}};
    // dbase.collection('site').updateMany(whereStr, updateStr, function (err, res) {
    //     if(err){
    //         throw err;
    //     }
    //
    //     console.log(res.result.nModified+" 条文档被更新");
    //     db.close();
    // });

    //删除一条数据
    // var whereStr = {"name": "菜鸟教程"};
    // dbase.collection('site').deleteOne(whereStr, function (err, obj) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('文档删除成功');
    //     db.close();
    // });

    //删除多条数据
    // var whereStr = {type: 'us'};
    // dbase.collection('site').deleteMany(whereStr, function (err, obj) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(obj.result.n + ' 条文档被删除');
    //     db.close();
    // });

    //排序
    // var mySort = {type: -1};
    // dbase.collection('site').find().sort(mySort).toArray(function (err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     console.log(result);
    //     db.close();
    // });


    //查询分页
    // dbase.collection('site').find().skip(2).limit(3).toArray(function (err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(result)
    //     db.close();
    // });

    //删除集合
    // dbase.collection('site').drop(function (err, delOk) {
    //     if (err) {
    //         throw err;
    //     }
    //     if (delOk) {
    //         console.log('集合site已经删除');
    //     }
    //     db.close();
    // })
});