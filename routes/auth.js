const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController= require('../controllers/authController');

// @desc Auth with Google
//@route GET /auth/google
router.get('/google',authController.googleAuthLogin);

// @desc Google auth callback
//@route GET /auth/google/callback
router.get('/google/callback',passport.authenticate('google',{ failureRedirect: '/' }),
authController.googleAuthCallback);

// @desc Logout user
//@route GET /auth/logout
router.get('/logout',authController.googleAuthLogout)

module.exports= router;