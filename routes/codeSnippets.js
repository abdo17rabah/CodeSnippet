const express = require('express');
const router = express.Router();
const {ensureGuest,ensureAuth} = require('../middleware/auth');
const codeSnippetsController = require('../controllers/codeSnippetsController');

// @desc Show add Page
//@route GET /codesnippets/add
router.get('/add',ensureAuth,codeSnippetsController.showAddPage);

// @desc Process add form 
//@route POST /codesnippets
router.post('/',ensureAuth,codeSnippetsController.addForm );

// @desc Show all code snippets
//@route GET /codesnippets
router.get('/',ensureAuth,codeSnippetsController.showAllSnippets);

// @desc Show single code snippet Page
//@route GET /codesnippets/:id
router.get('/:id',ensureAuth,codeSnippetsController.showSingleSnippets );

// @desc Show edit Page
//@route GET /codesnippets/edit/:id
router.get('/edit/:id',ensureAuth, codeSnippetsController.editCodeSnippets);

// @desc update code snippet
//@route PUT /codesnippets/:id
router.put('/:id',ensureAuth,codeSnippetsController.updateCodeSnippets);

// @desc Delete code snippet
//@route DELETE /codesnippets/:id
router.delete('/:id',ensureAuth,codeSnippetsController.deleteCodeSnippets);

// @desc User code snippets Page
//@route GET /codesnippets/user/:userId
router.get('/user/:userId',ensureAuth,codeSnippetsController.userCodeSnippets);

module.exports= router;