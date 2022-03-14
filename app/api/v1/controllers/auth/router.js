import express from 'express';

import controller from './controller';
import {authValidation, validate} from '../../../../helpers/validations'

const router = express.Router();

export default router
 
    .post('/login', authValidation.login, validate, controller.login)
    .post('/register', authValidation.register, validate, controller.register)
    
   
