const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var consign = require('consign');

const app = express();

app.use(cors());
app.use(bodyparser.json());


/* consign().
include('router').
then('db/connection.js').
into(app); */

// configurado o banco de dados
const mysql = require('mysql2');

const db = mysql.createConnection({
    dialect: 'mysql',
    host:'localhost',
    user:'root',
    password:'root',
    database:'db_products',
    port:3306
})

db.connect(err=>{
    if(err){ console.log(err);}
    console.log('db conectado');
})

// Rotas

app.get('/produts', (req,res) =>{
    qr = `SELECT * FROM produts`
    db.query(qr, (err, result) =>{
        if(err){ console.log(`getAll - erro ao executar ${err}`); }
        if(result.length > 0)
            res.send({message: 'Todos dados', data: result})
    })
})

app.get('/produtsAll', (req,res) =>{
    qr = `SELECT * FROM produts where status = 1`
    db.query(qr, (err, result) =>{
        if(err){ console.log(`getAll - erro ao executar ${err}`); }
        if(result.length > 0)
            res.send({message: 'Todos dados', data: result})
    })
})

app.get('/produts/:id', (req, res) =>{
    let id = req.params.id;
    qr = `SELECT * FROM produts where idprodut =  ${id}`
    db.query(qr, (err, result) =>{
        if(err){ console.log(`get - erro ao executar ${err}`); }
        res.send({data: result})
    })
})

app.post('/produts', (req, res) =>{
     let produt = req.body;
    let qr = `INSERT INTO db_products.produts(name, img, description, inventory, status, value)
     value('${produt.name}', '${produt.img}', '${produt.description}', '${produt.inventory}','${produt.status}', '${produt.value}')`;

    db.query(qr, (err, result) =>{
        if(err){ console.log(`post - erro ao executar (POST) ${err}`); }
        if(result.length > 0)
            return res.send({message: 'Produto inserido no sistema'})
        return res.send({message: 'Erro ao cadastrar'})
    })     
})

app.delete('/produts/:id', (req, res) =>{
    let id = req.params.id;
    qr = `DELETE FROM produts WHERE idprodut =  ${id}`
    db.query(qr, (err, result) =>{
        if(err){ console.log(`delete - erro ao executar ${err}`); }
        res.send({data: 'Produto deletado do sistema'})
    })
})

app.put('/produts/:id', (req, res)=>{
    let produt = req.body;
    let id = req.params.id;
    qr = `UPDATE produts SET name = '${produt.name}', img = '${produt.img}', description = '${produt.description}', inventory = '${produt.inventory}', status = '${produt.status}', value = '${produt.value}' WHERE (idprodut = '${id}');`
    console.log(qr);
    db.query(qr, (err, result) =>{
        if(err)
            return console.log(`update erro ao executar ${err}`); 
        return res.send({message: 'Produto inserido no sistema', result:result})
    })   
})


app.listen(3000, () =>{
    console.log('Servidor rodando')
})