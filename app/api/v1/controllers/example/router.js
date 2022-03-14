import express from 'express';

import controller from './controller';
import {exampleValidation, validate} from '../../../../helpers/validations'

const router = express.Router();

export default router
    .get('/:id', controller.findOne)
    .get('/',controller.findAll)
    .post('/',exampleValidation.addExample, validate, controller.create)
    .put('/:id', controller.update)
    .delete('/:id', controller.remove)
   
