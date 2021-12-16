const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const user_controller = require('../controllers/user.controller');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload/gift')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

router.get('/', user_controller.list_user);
router.get('/:id', user_controller.detail_user);

router.post('/', auth(), user_controller.add_user);
router.post('/login', user_controller.user_login);

router.put('/:id', user_controller.update_user)
router.delete('/:id', user_controller.delete_user)


module.exports = router;