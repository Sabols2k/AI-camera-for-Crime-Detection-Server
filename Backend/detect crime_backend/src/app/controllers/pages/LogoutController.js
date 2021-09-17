const admins = require("../../models/Admin");
// const products = require("../../models/Product");
const {mongooseToObject,mutipleMongooseToObject,checkLoginForOption } = require('../../../util/mongoose');

const bcrypt = require("bcryptjs");


const crypto = require("crypto");



class LogoutController {
  
  index(req, res, next) {
    req.session.loggedIn = false
    res.redirect("http://localhost:3001/zestreact/app/login")
  }

}

module.exports = new LogoutController();

// const courseController = require('./CourseController');
