const createHttpError = require('http-errors');
const _ = require('lodash');
const { Processor } = require('../db/models');

module.exports.createProcessor = async (req, res, next) => {
  const { body } = req;

  try {
    const createdProcessor = await Processor.create(body, {
      raw: true,
      exclude: ['createdAt', 'updatedAt'],
    });

    if (!createdProcessor) {
      return next(createHttpError(400, 'Something went wrong...'));
    }

    const preparedProcessor = _.omit(createdProcessor.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedProcessor });
  } catch (err) {
    next(err);
  }
};

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

module.exports.updateProcessor = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const [updatedProcessorsCount, [updatedProcessor]] = await Processor.update(
      body,
      {
        where: { id },
        raw: true,
        returning: true,
      }
    );

    if (!updatedProcessorsCount) {
      return next(createHttpError(404, 'Processor not found ):'));
    }

    const preparedProcessor = _.omit(updatedProcessor, [
      'createdAt',
      'updatedAt',
    ]);

    res.status(200).send({ data: preparedProcessor });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteProcessor = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundProcessorsCount = await Processor.destroy({ where: { id } });

    if (!foundProcessorsCount) {
      return next(createHttpError(404, 'Processor not found ):'));
    }

    res.status(204).end();
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

    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedPhone });
  } catch (err) {
    next(err);
  }
};
