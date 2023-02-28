const { Verbal, Quantitative, ProblemSolving, TryOut } = require('../models');

class TryOutController {
  static async getTryOut(req, res, next) {
    try {
      const { id } = req.params;
      const tryOut = await TryOut.findOne({
        where: { id },
        include: [Verbal, Quantitative, ProblemSolving],
      });
      if (!tryOut) {
        throw { name: 'not_found' };
      }
      res.status(200).json(tryOut);
    } catch (err) {
      next(err);
    }
  }

  static async getAllTryOut(req, res, next) {
    try {
      const tryOuts = await TryOut.findAll({
        include: [Verbal, Quantitative, ProblemSolving],
      });
      res.status(200).json(tryOuts);
    } catch (err) {
      next(err);
    }
  }

  static async createTryOut(req, res, next) {
    try {
      const { name, type } = req.body;
      const tryOut = await TryOut.create({ name, type });
      res.status(201).json(tryOut);
    } catch (err) {
      next(err);
    }
  }

  static async updateTryOut(req, res, next) {
    try {
      const { id } = req.params;
      const { name, type } = req.body;
      const tryOut = await TryOut.update({ name, type }, { where: { id } });
      res.status(200).json(tryOut);
    } catch (err) {
      next(err);
    }
  }

  static async deleteTryOut(req, res, next) {
    try {
      const { id } = req.params;
      const tryOut = await TryOut.destroy({ where: { id } });
      res.status(200).json(tryOut);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TryOutController;
