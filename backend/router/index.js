const  express = require('express');
const router = express.Router();
const produtsController = require('../controllers/produts-controllers')

router.get('/produts', produtsController.getProduts)
router.get('/produtsAll', produtsController.getProdutAll)
router.get('/produts/:id', produtsController.getProdutId)
router.post('/produts', produtsController.creat)
router.delete('/produts/:id', produtsController.delete)
router.put('/produts/:id', produtsController.update)

module.exports = router;