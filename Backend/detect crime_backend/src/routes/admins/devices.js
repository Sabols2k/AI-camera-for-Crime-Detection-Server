const express = require('express');
const router = express.Router();

const AdmindeviceController = require('../../app/controllers/pages/AdminDeviceController');


router.get('/show', AdmindeviceController.show);
router.get('/showdeviceuser', AdmindeviceController.showdeviceUser);
router.post('/create', AdmindeviceController.create);
router.post('/store', AdmindeviceController.store);
router.get('/:id/edit', AdmindeviceController.edit);
router.put('/:id', AdmindeviceController.update);
router.get('/:slug', AdmindeviceController.showuser);
router.delete('/:id', AdmindeviceController.destroy);
router.get('/', AdmindeviceController.index);
// router.get('/:slug', deviceController.show);

module.exports = router;


