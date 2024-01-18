const createHttpError = require('http-errors');
const { Processor } = require('./../models');

module.exports.getAllProcessors = async (req, res, next) => {
  try {
    const foundProcessors = await Processor.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    res.status(200).send({ data: foundProcessors });
  } catch (err) {
    next(err);
  }
};

module.exports.getProcessor = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundProcessor = await Processor.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundProcessor) {
      return next(createHttpError(404, 'Processor not found'));
    }

    res.status(200).send({ data: foundProcessor });
  } catch (err) {
    next(err);
  }
};
