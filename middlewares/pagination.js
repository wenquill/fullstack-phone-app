module.exports.paginatePhones = (req, res, next) => {
  const queries = req.query;
  const page = queries.page || 1;
  const pageSize = queries.pageSize || 10;
  const offset = (page - 1) * pageSize;

  const pagination = {
    limit: parseInt(pageSize),
    offset: parseInt(offset),
  };

  req.pagination = pagination;
  next();
};
