const Course = require('../models/Ultrasonic');
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    // Course.findOne({slug: req.params.slug})
    //   .then(course =>{
    //     res.render('courses/show', {course: mongooseToObject(course)});  //{course để truyền dữ liệu sang view}
    //   })
    //   .catch(next);
  }

  //[POST]] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] /courses/store
  store(req, res, next) {
     const formData = req.body;
     console.log("abc"+formData.name);
     formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
     const course = new Course(formData);
     course.save()
      .then(() => res.redirect(`/`))
      .catch(error =>{

      });
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit', {
        course: mongooseToObject(course)
      }))
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    // res.json(req.body);
    Course.updateOne({_id: req.params.id}, req.body)
      .then(()=> res.redirect('/me/stored/courses/'))
      .catch(next); 
  }
  //[DELETE] /courses/:id
  destroy(req, res, next){
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next);
  }
  
}
module.exports = new CourseController();

// const courseController = require('./CourseController');
