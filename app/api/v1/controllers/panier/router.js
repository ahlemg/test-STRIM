import express from 'express';

import controller from './controller';
import {panierValidation, validate} from '../../../../helpers/validations'
import auth from '../../../../middleware/auth';

const router = express.Router();

export default router
   
    .post('/',auth.verifyToken,panierValidation.create, validate, controller.create)
    
   
