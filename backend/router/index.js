module.exports = function (app) {
    app.get('/produts', (req,res) =>{
        console.log('Lista de produtos', res)
    })
}