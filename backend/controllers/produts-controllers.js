const db = require('../db/connection');

exports.getProduts = (req, res, next) =>{
    qr = `SELECT * FROM produts`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        if(result.length > 0)
            res.send({ data: result})
    })
}

exports.getProdutAll = (req,res) =>{
    qr = `SELECT * FROM produts where status = 1`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        if(result.length > 0)
            res.send({ data: result})
    })
}

exports.getProdutId = (req, res) =>{
    let id = req.params.id;
    qr = `SELECT * FROM produts where idprodut =  ${id}`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        res.send({data: result})
    })
}

exports.creat = (req, res) =>{
    let produt = req.body;
   let qr = `INSERT INTO db_products.produts(name, img, description, inventory, status, value)
    value('${produt.name}', '${produt.img}', '${produt.description}', '${produt.inventory}','${produt.status}', '${produt.value}')`;

   db.query(qr, (err, result) =>{
       if (err) throw err;
       if(result.length > 0)
           return res.send({message: 'Produto inserido no sistema'})
       return res.send({message: 'Erro ao cadastrar'})
   })     
}

exports.delete = (req, res) =>{
    let id = req.params.id;
    qr = `DELETE FROM produts WHERE idprodut =  ${id}`
    db.query(qr, (err, result) =>{
        if (err) throw err;
        res.send({message: 'Produto deletado do sistema'})
    })
}

exports.update = (req, res)=>{
    let produt = req.body;
    let id = req.params.id;
    qr = `UPDATE produts SET name = '${produt.name}', img = '${produt.img}', description = '${produt.description}', inventory = '${produt.inventory}', status = '${produt.status}', value = '${produt.value}' WHERE (idprodut = '${id}');`

    db.query(qr, (err, result) =>{
        if (err) throw err;
        return res.send({message: 'Produto alterado no sistema', result:result})
    })   
}