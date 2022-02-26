const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');

const validateCreateForm = [
    body('first_name').notEmpty().withMessage('Complete el campo de nombre');
    body('last_name').notEmpty().withMessage('Complete el campo de apellido');
    body('email').isEmail().withMessage('Complete el campo con un correo valido');

];
