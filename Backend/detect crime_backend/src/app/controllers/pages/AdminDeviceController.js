

const devices = require('../../models/Device');
const admins = require('../../models/Admin');
const { mutipleMongooseToObject } = require("../../../util/mongoose");
const { mongooseToObject } = require("../../../util/mongoose");
class AdminDeviceController {

  index(req, res) {
    res.render('devices/create');
  }
  //[GET] /courses/:slug
  show(req, res, next) {
    devices.find({}, function (err, device) {
      if(!err) {
        res.json(device)
      } else{
        res.status(400).json({error: "ERROR"});
      }
    })
  }

  //[POST] /courses/create
  async create(req, res, next) {
    // res.render('courses/create');

    //  const data = {
    //   admin_id : "608778c15ba0d10c6306525811111",
    //   device_name: "dht11",
    //   value :121,
    // };

    const data = req.body;
    console.log(req.body);
    // const dv = await devices.findOne({username: req.body.username});
    // console.log(dv)
    // data.admin_id = dv._id
    data.admin_id = "609beea03b63401a2c599f39"

    // console.log(formData);
    // res.redirect(`/`);
    // const data = {
    //   "device_name":"sabols2k11",
    //   "value":"123456",
    // };
    // const data = {
    //   sensor_id: "45",
    //   value: 110,
    // };
    console.log("aaaaa")
    console.log(data)
    const device = new devices(data);
     
    // device.save(function (err) {
    //   console.log(err);
    // }).then(() => res.redirect(`/`));

    // res.redirect('http://localhost:3001/zestreact/app/device/dashboard')

    device.save()
    .then(item => 
    { 
      res.redirect('http://localhost:3001/zestreact/app/admin/devices')
      // res.send("item saved to database");
    })
    .catch(error =>{
      res.status(400).send("unable to save to database");
    });
    res.json(data);

   
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
    devices.findById(req.params.id)
      .then(devices => res.render('courses/edit', {
        devices: mongooseToObject(devices)
      }))
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    // res.json(req.body);
    // devices.updateOne({_id: req.params.id}, req.body)
    //   .then(()=> res.redirect('/me/stored/courses/'))
    //   .catch(next); 

      
    // res.send('New Detail!!!');
  }

  showuser(req, res, next) {
    // devices.findById(req.params.id)
    // .then(device => res.json(device))

    //   // .then(devices => res.render('courses/edit', {
    //   //   devices: mongooseToObject(devices)
    //   // }))
    //   .catch(next);

    // res.send(req.url);
    
    devices.findOne({slug: req.params.slug})
    .then(device => res.json(device))
    
      // .then(devices => res.render('courses/edit', {
      //   devices: mongooseToObject(devices)
      // }))
      .catch(next);
  }
  //[DELETE] /courses/:id
  destroy(req, res, next){
    devices.deleteOne({_id: req.params.id})
      // .then(() => res.redirect('back'))
      .catch(next);
  }
  async showdeviceUser(req, res, next){
    console.log(req.body.email)
    var device = await devices.find({ admin_id: "608778c15ba0d10c6306525811111" });
    res.json(device);

  }
}

module.exports = new AdminDeviceController();

// const courseController = require('./CourseController');
