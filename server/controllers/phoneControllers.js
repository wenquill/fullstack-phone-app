const { Op } = require('sequelize');
const { Phone, Processor } = require('../db/models');
const createHttpError = require('http-errors');
const _ = require('lodash');

module.exports.createPhone = async (req, res, next) => {
  const { body, file } = req;

  try {
    if (file) {
      body.image = file.filename;
    }

    const createdPhone = await Phone.create(body);
    if (!createdPhone) {
      return next(createHttpError(404, 'Something went wrong...'));
    }

    res.status(201).send(createdPhone);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllPhones = async (req, res, next) => {
  const queries = req.query;
  const { pagination } = req;

  const whereConditions = {};
  Object.keys(queries)
    .filter(key => key !== 'page' && key !== 'pageSize')
    .forEach(key => {
      whereConditions[key] = {
        [Op.eq]: queries[key],
      };
    });

  try {
    const foundPhones = await Phone.findAll({
      where: whereConditions,
      order: ['manufacturedYear'],
      include: {
        model: Processor,
        attributes: ['name'],
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      ...pagination,
    });

    if (!foundPhones.length) {
      return next(createHttpError(404, 'Phones not found ):'));
    }

    res.status(200).send(foundPhones);
  } catch (err) {
    next(err);
  }
};

module.exports.updateAllPhones = async (req, res, next) => {
  const { body } = req;
  const queries = req.query;

  const whereConditions = {};
  for (const key in queries) {
    if (queries.hasOwnProperty(key) && key !== 'page' && key !== 'pageSize') {
      whereConditions[key] = {
        [Op.eq]: queries[key],
      };
    }
  }

  try {
    const [updatedPhonesCount, updatedPhones] = await Phone.update(body, {
      where: whereConditions,
      raw: true,
      returning: true,
    });

    if (!updatedPhonesCount) {
      return next(createHttpError(404, 'Phones not found ):'));
    }

    res.status(200).send(updatedPhones);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteAllPhones = async (req, res, next) => {
  const queries = req.query;

  const whereConditions = {};
  for (const key in queries) {
    if (queries.hasOwnProperty(key)) {
      whereConditions[key] = {
        [Op.eq]: queries[key],
      };
    }
  }

  try {
    const deletedPhone = await Phone.destroy({ where: whereConditions });

    if (!deletedPhone) {
      return next(createHttpError(404, 'Phones not found ):'));
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports.getPhone = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhone = await Phone.findByPk(id, {
      include: {
        model: Processor,
        attributes: ['name'],
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!foundPhone) {
      return next(createHttpError(404, 'Phone not found ):'));
    }

    res.status(200).send(foundPhone);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedPhone = await Phone.update(body, {
      where: { id: id },
      returning: true,
    });

    if (!updatedPhone[1].length) {
      return next(createHttpError(404, 'Phone not found ):'));
    }

    res.status(200).send(updatedPhone[1]);
  } catch (err) {
    next(err);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPhone = await Phone.destroy({ where: { id: id } });

    if (!deletedPhone) {
      return next(createHttpError(404, 'Phone not found ):'));
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhoneImage = async (req, res, next) => {
  const {
    file,
    params: { id },
  } = req;

  try {
    if (!file) {
      return next(createHttpError(422, 'Image is required'));
    }
    const [updatedPhoneCount, [updatedPhone]] = await Phone.update(
      { image: file.filename },
      { where: { id }, raw: true, returning: true }
    );

    if (!updatedPhoneCount) {
      return next(createHttpError(404, 'Phone not found ):'));
    }

    const preparedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);

    res.status(200).send(preparedPhone);
  } catch (err) {
    next(err);
  }
};
