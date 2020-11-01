const express = require('express');
const router = express.Router();
const {ensureGuest,ensureAuth} = require('../middleware/auth');
const indexController=require('../controllers/indexController')
// @desc Login/Landing Page
//@route GET /
router.get('/',ensureGuest,indexController.loginMainPage);

// @desc Dashbord
//@route GET /Dashboard
router.get('/dashboard',ensureAuth,indexController.dashboardPage);

module.exports= router;