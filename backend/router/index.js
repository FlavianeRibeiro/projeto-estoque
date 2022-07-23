const  express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/produts', (req,res) =>{
    qr = `SELECT * FROM produts`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        if(result.length > 0)
            res.send({message: 'Todos dados', data: result})
    })
})

router.get('/produtsAll', (req,res) =>{
    qr = `SELECT * FROM produts where status = 1`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        if(result.length > 0)
            res.send({message: 'Todos dados', data: result})
    })
})

router.get('/produts/:id', (req, res) =>{
    let id = req.params.id;
    qr = `SELECT * FROM produts where idprodut =  ${id}`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        res.send({data: result})
    })
})

router.post('/produts', (req, res) =>{
     let produt = req.body;
    let qr = `INSERT INTO db_products.produts(name, img, description, inventory, status, value)
     value('${produt.name}', '${produt.img}', '${produt.description}', '${produt.inventory}','${produt.status}', '${produt.value}')`;

    db.query(qr, (err, result) =>{
        if (err) throw err;
        if(result.length > 0)
            return res.send({message: 'Produto inserido no sistema'})
        return res.send({message: 'Erro ao cadastrar'})
    })     
})

router.delete('/produts/:id', (req, res) =>{
    let id = req.params.id;
    qr = `DELETE FROM produts WHERE idprodut =  ${id}`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        res.send({data: 'Produto deletado do sistema'})
    })
})

router.put('/produts/:id', (req, res)=>{
    let produt = req.body;
    let id = req.params.id;
    qr = `UPDATE produts SET name = '${produt.name}', img = '${produt.img}', description = '${produt.description}', inventory = '${produt.inventory}', status = '${produt.status}', value = '${produt.value}' WHERE (idprodut = '${id}');`

    db.query(qr, (err, result) =>{
        if (err) throw err;
        return res.send({message: 'Produto inserido no sistema', result:result})
    })   
})

module.exports = router;