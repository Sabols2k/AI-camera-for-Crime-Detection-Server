const admins = require('../models/Admin');
const {mongooseToObject} = require('../../util/mongoose');
class AdminController {

  index(req, res) {
    res.render('courses/create');
  }
  //[GET] /courses/:slug
  show(req, res, next) {
    admins.find({}, function (err, admin) {
      if(!err) {
        res.json(admin)
      } else{
        res.status(400).json({error: "ERROR"});
      }
    })
  }
  showcustomer(req, res, next) {
    admins.find({role: '1'}, function (err, admin) {
      if(!err) {
        res.json(admin)
      } else{
        res.status(400).json({error: "ERROR"});
      }
    })
  }

  //[POST] /courses/create
  create(req, res, next) {
    // res.render('courses/create');
    const data = req.body;
    // console.log(formData);
    // res.redirect(`/`);
    // const data = {
    //   "username":"sabols2k11",
    //   "password":"123456",
    //   "name":"chaudd",
    //   "age":"21",
    //   "img":"aaaa",
    // };
    // console.log(data);
    data.role=1;
    const admin = new admins(data);
     
    // admin.save(function (err) {
    //   console.log(err);
    // }).then(() => res.redirect(`/`));

    // res.redirect('http://localhost:3001/zestreact/app/admin/dashboard')

    admin.save()
    .then(item => 
    { 
      res.redirect('http://localhost:3001/zestreact/app/admin/users')
      // res.send("item saved to database");
    })

    .catch(error =>{
      res.status(400).send("unable to save to database");
    });
    // res.json(data);
    
  }

  //[POST] /courses/store
  store(req, res, next) {
     const formData = req.body;
    //  console.log("abc"+formData.name);
     
     formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
     const course = new Course(formData);
    //  res.send("Data:"+formData.name);
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
    // Course.updateOne({_id: req.params.id}, req.body)
    //   .then(()=> res.redirect('/me/stored/courses/'))
    //   .catch(next); 

    res.send('New Detail!!!');
  }

  async showuser(req, res, next) {
    const user = await admins.findOne({_id: req.params.id})
    console.log(user);
    res.json(user);
  }
  //[DELETE] /courses/:id
  destroy(req, res, next){
    admins.deleteOne({_id: req.params.id})
      // .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new AdminController();

// const courseController = require('./CourseController');
