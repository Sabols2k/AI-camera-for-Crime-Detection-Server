const express = require('express');
const router = express.Router();

const deviceController = require('../app/controllers/DeviceController');


router.get('/show', deviceController.show);
router.get('/showdeviceuser', deviceController.showdeviceUser);
router.post('/create', deviceController.create);
router.post('/store', deviceController.store);
router.get('/:id/edit', deviceController.edit);
router.put('/:id', deviceController.update);
router.get('/:slug', deviceController.showuser);
router.delete('/:id', deviceController.destroy);
router.get('/', deviceController.index);
// router.get('/:slug', deviceController.show);

module.exports = router;


