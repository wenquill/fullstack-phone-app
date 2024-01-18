const { Router } = require('express');
const { processorControllers } = require('./../controllers');

const processorsRouter = Router();

processorsRouter.get('/', processorControllers.getAllProcessors);

processorsRouter.get('/:id', processorControllers.getProcessor)

module.exports = processorsRouter;
