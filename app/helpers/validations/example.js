const { body } = require('express-validator');

export default {
  addExample: [
    body("email").exists().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    body("name").exists().withMessage('Name is required').isLength({ min: 5 }).withMessage('Name should have a min length = 5'),
  ]
};
