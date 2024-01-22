const { Router } = require('express');
const { processorControllers } = require('./../controllers');

const processorsRouter = Router();

processorsRouter
  .route('/')
  .post(processorControllers.createProcessor)
  .get(processorControllers.getAllProcessors);

processorsRouter
  .route('/:id')
  .get(processorControllers.getProcessor)
  .patch(processorControllers.updateProcessor)
  .delete(processorControllers.deleteProcessor);

processorsRouter
  .route('/:id/phones')
  .get(processorControllers.getProcessorPhones)
  .post(processorControllers.createProcessorPhone);

module.exports = processorsRouter;
