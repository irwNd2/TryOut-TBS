const router = require('express').Router();
const UserController = require('../controllers/userController');
const authentication = require('../middlewares/auth');
const upload = require('../middlewares/upload');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authentication, UserController.getOne);
router.patch('/profile', authentication, UserController.updateUser);
router.put('/profile', authentication, UserController.updateData);
router.post(
  '/profile/photo',
  upload.single('photo'),
  UserController.updatePhoto,
);

module.exports = router;
