const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { pagination, upload } = require('../middlewares');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(upload.uploadPhoto, phoneControllers.createPhone)
  .get(pagination.paginatePhones, phoneControllers.getAllPhones)
  .patch(phoneControllers.updateAllPhones)
  .delete(phoneControllers.deleteAllPhones);

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhone)
  .patch(phoneControllers.updatePhone)
  .delete(phoneControllers.deletePhone);

phonesRouter.patch(
  '/:id/images',
  upload.uploadPhoto,
  phoneControllers.updatePhoneImage
);

module.exports = phonesRouter;
