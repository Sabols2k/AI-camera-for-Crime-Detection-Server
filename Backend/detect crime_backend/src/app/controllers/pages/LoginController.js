// const admins = require("../../models/Admin");
const users = require("../../models/Admin");
// const products = require("../../models/Product");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../../util/mongoose");
const bcrypt = require("bcryptjs");

// const crypto = require("crypto");

class LoginController {

  index(req, res, next) {
    console.log(req.session)
    // const user = await admins.findOne({ username: "chaudd" });
    res.render("login");
  }

  // }
   async login(req, res, next) {
    // console.log(req.body)
    // console.log(req.session)
    try {
      // console.log(req.body)
      var user = await users.findOne({ username: req.body.username });
      // user = mongooseToObject(user)
      console.log(user)
      console.log(req.body)
      console.log(user.role);
      // console.log(user.password === req.body.password)
//!user || !bcrypt.compareSync(req.body.password, user.passwordHash)
      if (!user || !(user.password === req.body.password) || !(user.role === '1') ) {
        res.redirect("http://localhost:3001/zestreact/app/login")
      } else {
        req.session.loggedIn = true;
        req.session.user = user;
        req.session.userid = user._id;
        // res.redirect('back');
        res.redirect('http://localhost:3001/zestreact/app/dashboard');
        console.log(req.session)
      }
    } catch (err) {
      res.send({ status: false, msg: "Login failed2 :(" });
      console.log(err);
      next();
    }
  }

}

module.exports = new LoginController();

// const courseController = require('./CourseController');
