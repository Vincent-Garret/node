const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/category.controller');

router.get('/', category_controller.list_category);
// router.get('/properties/:id', category_controller.property_category);
router.post('/', category_controller.add_category);
router.put('/:id', category_controller.update_category)
router.delete('/:id', category_controller.delete_category)

module.exports = router;