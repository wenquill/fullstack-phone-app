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

module.exports.getProcessorPhones = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundProcessor = await Processor.findByPk(id);

    if (!foundProcessor) {
      return next(createHttpError(404, 'Processor not found'));
    }

    const foundPhones = await foundProcessor.getPhones({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.createProcessorPhone = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const foundProcessor = await Processor.findByPk(id);

    if (!foundProcessor) {
      return next(createHttpError(404, 'Processor not found'));
    }

    const createdPhone = await foundProcessor.createPhone({
      ...body,
      processorId: id,
    });

    if (!createdPhone) {
      return next(createHttpError(400, 'Something went wrong...'));
    }

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    next(err);
  }
};
