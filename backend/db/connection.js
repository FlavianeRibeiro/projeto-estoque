const mysql = require('mysql2');

const db = mysql.createConnection({
    dialect: 'mysql',
    host:'localhost',
    user:'root',
    password:'root',
    database:'db_products',
    port:3306
});

db.connect(err=>{
    if(err){ console.log(err);}
    console.log('db conectado');
});

module.exports = db;