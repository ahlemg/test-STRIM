import express from 'express';

import controller from './controller';
import {panierValidation, validate} from '../../../../helpers/validations'

const router = express.Router();

export default router
   
    .post('/',panierValidation.create, validate, controller.create)
    
   
