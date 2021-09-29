const router = require('express').Router();
const userController = require('../controllers/user');

//create user route
router.post('/register-user', userController.registerUser);

// login user route
router.post('/login-user', userController.loginUser);

// follow user route
router.put('/follow-user', userController.followerUser);

// unfollow user route
router.put('/unfollow-user', userController.unfollowerUser);

module.exports = router;