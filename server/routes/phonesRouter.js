const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { pagination } = require('./../middlewares');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phoneControllers.createPhone)
  .get(pagination.paginatePhones, phoneControllers.getAllPhones)
  .patch(phoneControllers.updateAllPhones)
  .delete(phoneControllers.deleteAllPhones);

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhone)
  .patch(phoneControllers.updatePhone)
  .delete(phoneControllers.deletePhone);

module.exports = phonesRouter;
