const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, confirmed_password } = req.body;
      if (!email || !password || !confirmed_password) {
        throw { name: 'bad_request' };
      }
      if (password !== confirmed_password) {
        throw { name: 'bad_request' };
      }
      const user = await User.create({ email, password });

      res.status(201).json({ id: user.id, email: user.email });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: 'bad_request' };
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: 'invalid_login' };
      }
      const isValid = comparePassword(password, user.password);
      if (!isValid) {
        throw { name: 'invalid_login' };
      }
      const access_token = generateToken({ id: user.id, email: user.email });
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findByPk(id);
      res.status(200).json({ id: user.id, email: user.email });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
