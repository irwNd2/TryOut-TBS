const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

const authentication = (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: 'forbidden' };
    }
    const payload = verifyToken(access_token);
    const userLoggedIn = User.findByPk(payload.id);
    if (!userLoggedIn) {
      throw { name: 'invalid_token' };
    }
    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
