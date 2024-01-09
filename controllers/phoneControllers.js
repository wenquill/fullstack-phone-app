const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return res.status(400).send('Something went wrong...');
    }

    res.status(201).send(createdPhone);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllPhones = async (req, res, next) => {
  const queryParams = req.query;
  const page = queryParams.page || 1;
  const pageSize = queryParams.pageSize || 10;

  const whereConditions = {};
  for (const key in queryParams) {
    if (
      queryParams.hasOwnProperty(key) &&
      key !== 'page' &&
      key !== 'pageSize'
    ) {
      whereConditions[key] = {
        [Op.eq]: queryParams[key],
      };
    }
  }

  const offset = (page - 1) * pageSize;

  try {
    const foundPhones = await Phone.findAll({
      where: whereConditions,
      limit: parseInt(pageSize),
      offset: parseInt(offset),
    });

    if (!foundPhones) {
      return res.status(404).send('Phones not found ):');
    }

    res.status(200).send(foundPhones);
  } catch (err) {
    next(err);
  }
};

module.exports.getPhone = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhone = await Phone.findByPk(id);

    if (!foundPhone) {
      return res.status(404).send('Phone not found ):');
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedPhone = await Phone.update(body, {
      where: {
        id: id,
      },
    });

    res.status(200).send(updatedPhone);
  } catch (err) {}
};

module.exports.deletePhone = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPhone = await Phone.destroy(id);

    if (!deletedPhone) {
      return res.status(404).send('PHone not found ):');
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
