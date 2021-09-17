const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.get('/show', adminController.show);
router.get('/showcustomer', adminController.showcustomer);
router.post('/create', adminController.create);
router.post('/store', adminController.store);
router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.update);
router.get('/:id', adminController.showuser);
router.delete('/:id', adminController.destroy);

router.get('/', adminController.index);
// router.get('/:slug', adminController.show);

module.exports = router;


