const { Router } = require('express');
const { processorControllers } = require('./../controllers');

const processorsRouter = Router();

processorsRouter.get('/', processorControllers.getAllProcessors);

processorsRouter.get('/:id', processorControllers.getProcessor);

processorsRouter
  .route('/:id/phones')
  .get(processorControllers.getProcessorPhones)
  .post(processorControllers.createProcessorPhone);

module.exports = processorsRouter;
