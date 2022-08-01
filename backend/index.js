const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyparser.json());

// Rotas
const routerProduts = require('./router/index')
app.use(routerProduts);

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor rodando')
})
