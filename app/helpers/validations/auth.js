const { body } = require('express-validator');

export default {
  login: [
    body("email").exists().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    body("password").exists().withMessage('password is required'),
  ],
  register: [
    body("email").exists().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    body("password").exists().withMessage('password is required'),
  ]
};
