const express = require('express');
const router = express.Router();

const property_controller = require('../controllers/property.controller');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload/property')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage });


router.get('/', property_controller.list_property);
router.get('/:id', property_controller.detail_property);
router.get('/category/:id', property_controller.property_category)
router.get('/user/:id', property_controller.property_user)
router.get('/search/:search', property_controller.search_property)

router.post('/', upload.single('picture'), property_controller.add_property)
router.post('/', property_controller.add_property);
router.put('/:id', property_controller.update_property)
router.delete('/:id', property_controller.delete_property)


module.exports = router;