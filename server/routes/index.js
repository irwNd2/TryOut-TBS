const router = require('express').Router();
const userRouter = require('./userRouter');
const tryOutRouter = require('./tryOutRouter');

router.use('/users', userRouter);
router.use('/tryouts', tryOutRouter);

module.exports = router;
