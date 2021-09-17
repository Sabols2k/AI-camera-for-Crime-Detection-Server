const express = require('express');
const router = express.Router();
const apiController = require('../app/controllers/ApiController');




// router.use('/search', apiController.search);resquest sendmail
router.get('/test', apiController.test);
router.get('/sendmail', apiController.sendmail);
router.use('/resquest', apiController.resquest);
router.get('/kq', apiController.kq);
router.get('/verifyToken', apiController.verifyToken);
router.post('/auth', apiController.auth);
router.use('/ultrasonic', apiController.ultrasonic);
router.get('/showday', apiController.showday);
router.get('/showweek', apiController.showweek);
router.get('/showmonth', apiController.showmonth);
router.get('/showyear', apiController.showyear);
router.use('/', apiController.index);

 module.exports = router;
