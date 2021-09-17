const express = require('express');
const router = express.Router();

// const adminController = require('../app/controllers/AdminController');
const LogoutController = require('../../app/controllers/pages/LogoutController');

//Authencation
router.get('/', LogoutController.index);

module.exports = router;


