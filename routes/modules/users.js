const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'temp/' })

const { authenticator } = require('../../middleware/auth')
const userController = require('../../controllers/userController')

// Routes
router.get('/login', userController.getLoginPage)
router.post('/login', userController.login)

router.get('/register', userController.getRegisterPage)
router.post('/register', userController.register)

router.get('/logout', userController.logout)

router.get('/profile', authenticator, userController.getUserProfile)
router.get('/edit', authenticator, userController.editUserProfile)
router.put(
  '/profile',
  authenticator,
  upload.single('image'),
  userController.putUserProfile
)

// Export router
module.exports = router
