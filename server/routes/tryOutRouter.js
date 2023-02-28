const router = require('express').Router();
const authentication = require('../middlewares/auth');
const TryOutController = require('../controllers/tryOutController');

router.get('/', authentication, TryOutController.getAllTryOut);
router.get('/detail/:id', authentication, TryOutController.getTryOut);
router.post('/', authentication, TryOutController.createTryOut);
router.put('/:id', authentication, TryOutController.updateTryOut);
router.delete('/:id', authentication, TryOutController.deleteTryOut);

module.exports = router;
