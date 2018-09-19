var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'game',
});

connection.connect();

// var addSql = 'insert into roles (id,slug,name,permissions,created_at,updated_at) values (?,?,?,?,?,?)';
// var addSqlParams = [6, 'toutiao_admin', '头条管理员', '', '2018-03-31 17:53:34', '2018-03-31 17:53:34'];
//
// connection.query(addSql, addSqlParams, function (err, result) {
//     if (err){
//         console.log('[insert error] - '+err.message);
//         return;
//     }
//
//     console.log('-----------insert------------');
//     console.log('insert into ',result);
//     console.log('------------------------------\n\n');
// });

// connection.query('SELECT * FROM `users`  LIMIT 10', function (error, result) {
//     if (error) {
//         console.log('[select error]-' + error.message);
//     }
//     console.log('--------select-----------');
//     console.log(result);
//     console.log('---------------------------------\n\n');
// });

// var modSql = 'update roles set slug=?,name=? where id=?';
// var modSqlParams = ['cainiao', '菜鸟移动站', 6];
//
// connection.query(modSql, modSqlParams, function (err, result) {
//     if (err) {
//         console.log('[update-error]' + err.message);
//         return;
//     }
//
//     console.log('-----------update-------------');
//     console.log('update affectedRows' + result.rowsAffected);
//     console.log('-------------------------------------\n\n');
// });

var delSql = 'delete from roles where id=6';
connection.query(delSql, function (err, result) {
    if (err) {
        console.log('[delete error]' + err.message);
        return;
    }
    console.log('--------------delete----------');
    console.log('delete affectedRows' + result.rowsAffected);
    console.log('-------------------------------\n\n');
});

connection.end();