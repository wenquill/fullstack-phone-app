const { Router } = require('express');
const { phoneControllers } = require('./../controllers');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phoneControllers.createPhone)
  .get(phoneControllers.getAllPhones);

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhone)
  .patch(phoneControllers.updatePhone)
  .delete(phoneControllers.deletePhone);

module.exports = phonesRouter;
