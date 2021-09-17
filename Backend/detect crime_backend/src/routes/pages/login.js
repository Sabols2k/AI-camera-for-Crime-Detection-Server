const express = require('express');
const router = express.Router();

// const adminController = require('../app/controllers/AdminController');
const LoginController = require('../../app/controllers/pages/LoginController');

//Authencation
router.post('/', LoginController.login);
router.get('/', LoginController.index);

module.exports = router;


