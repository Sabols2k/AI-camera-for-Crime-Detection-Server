const express = require('express');
const router = express.Router();

// const adminController = require('../app/controllers/AdminController');
const AdminLoginController = require('../app/controllers/AdminLoginController');

//Authencation
router.post('/', AdminLoginController.login);
router.get('/', AdminLoginController.index);

module.exports = router;


