const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/users'))
    },
    filename: (req, file, cb) => {
        cb(null, 'product-' + Date.now() + path.extname('file'))
    }
})

const upload = multer({ storage })


const userController = require('../controllers/userController');

const validateCreateForm = [
    body('first_name')
    .notEmpty()
    .withMessage('Complete el campo de nombre')
    .bail()
    .isLength({ min: 1 })
    .withMessage('Nombre muy corto'),
    body('last_name')
    .notEmpty()
    .withMessage('Complete el campo de apellido')
    .bail()
    .isLength({ min: 1 })
    .withMessage('Apellido muy corto'),
    body('email')
    .notEmpty()
    .withMessage('Complete el correo')
    .bail()
    .isEmail()
    .withMessage('Complete el campo con un correo valido'),
    body('fechaNacimiento')
    .notEmpty()
    .withMessage('Complete la fecha de nacimiento')
    .bail()
    .isDate(),
    body('contrasena_1')
    .notEmpty()
    .withMessage('Complete contraseña')
    .bail()
    .isLength({ min: 8, max: 12})
    .withMessage('La contraseña debe tener entre 8 y 12 caracteres')
];

//AQUI FALTA PONER LAS RUTAS
/* router.get('/', userController.home);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('[noseguro]', validateCreateForm, [noseguro].[noseguro]) */