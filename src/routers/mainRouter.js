const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const path = require("path");

const mainController = require("../controllers/mainController");

// Express-validator

const validator = [
  body("first_name")
    .notEmpty()
    .withMessage("Complete el campo de nombre")
    .bail()
    .isLength({ min: 1 })
    .withMessage("Nombre muy corto"),
  body("last_name")
    .notEmpty()
    .withMessage("Complete el campo de apellido")
    .bail()
    .isLength({ min: 1 })
    .withMessage("Apellido muy corto"),
  body("email")
    .notEmpty()
    .withMessage("Complete el correo")
    .bail()
    .isEmail()
    .withMessage("Complete el campo con un correo valido"),
  body("birth_date")
    .notEmpty()
    .withMessage("Complete la fecha de nacimiento")
    .bail()
    .isDate(),
  body("password")
    .notEmpty()
    .withMessage("Complete contraseña")
    .bail()
    .isLength({ min: 8, max: 12 })
    .withMessage("La contraseña debe tener entre 8 y 12 caracteres"),
];

// Main Routes

router.get("/", mainController.home);
router.get("/register", mainController.register);
router.post("/register", validator, mainController.createUser);
router.get("/login", mainController.login);
router.post("/login", mainController.home);

// Export

module.exports = router;
