const { User, UserData } = require('../models');
const { comparePassword, hashPassword } = require('../helpers/bcrypt');
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
      const user = await User.findOne({ where: { id }, include: UserData });
      if (!user) {
        throw { name: 'not_found' };
      }
      res
        .status(200)
        .json({ id: user.id, email: user.email, data: user.UserDatum });
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const { id } = req.user;
      const { email, old_password, new_password, confirmed_password } =
        req.body;
      if (!old_password || !new_password || !confirmed_password) {
        throw { name: 'bad_request' };
      }
      if (new_password !== confirmed_password) {
        throw { name: 'bad_request' };
      }
      const user = await User.findOne({ where: { id } });
      const isValid = comparePassword(old_password, user.password);
      if (!isValid) {
        throw { name: 'invalid_password' };
      }
      if (email) {
        await User.update({ email }, { where: { id } });
      } else if (new_password && email) {
        const password = hashPassword(new_password);
        await User.update({ email, password }, { where: { id } });
      } else {
        const password = hashPassword(new_password);
        await User.update({ password }, { where: { id } });
      }

      res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
      next(err);
    }
  }

  static async updateData(req, res, next) {
    try {
      const { id } = req.user;
      const {
        fullName,
        address,
        dateOfBirth,
        phoneNumber,
        profession,
        latestEducation,
        major,
        ProvinceId,
        KabupatenId,
      } = req.body;

      const data = await UserData.findOne({ where: { UserId: id } });

      if (!data) {
        const newData = await UserData.create({
          fullName,
          address,
          dateOfBirth,
          phoneNumber,
          profession,
          latestEducation,
          major,
          ProvinceId,
          KabupatenId,
          UserId: id,
        });
        res.status(201).json(newData);
      } else {
        const newData = await UserData.update(
          {
            fullName,
            address,
            dateOfBirth,
            phoneNumber,
            profession,
            latestEducation,
            major,
            ProvinceId,
            KabupatenId,
          },
          { where: { UserId: id } },
        );
        res.status(200).json(newData);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
