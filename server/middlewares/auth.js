const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

const authentication = (req, res, next) => {
  try {
    const access_token = req.headers.authorization;
    if (!access_token) {
      throw { name: 'forbidden' };
    }
    const payload = verifyToken(access_token);
    const userLoggedIn = User.findByPk(payload.id);
    if (!userLoggedIn) {
      throw { name: 'invalid_token' };
    }
    req.user = payload;
    console.log(payload);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
