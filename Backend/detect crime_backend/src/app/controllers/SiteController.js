const Course = require('../models/Ultrasonic');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
  //[GET] /news
  index(req, res, next) {
    //[GET]
    Course.find({})
      .then(courses => {
        
        res.render('home',{
        courses: mutipleMongooseToObject(courses)  //tương đương vs viết courses : courses
      })
      
    })
      .catch(next);
    // res.render('home');
  }

  // [GET] /news/:slug  // slug là 1 biến động
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();

const siteController = require('./SiteController');
