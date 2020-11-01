const CodeSnippet = require('../models/CodeSnippet');

// @desc Login/Landing Page
//@route GET /
module.exports.loginMainPage=(req,res)=>{
    res.render('login',{
        layout : 'login'
    });
}

// @desc Dashbord
//@route GET /Dashboard
module.exports.dashboardPage=async (req,res)=>{
    try{
        const codeSnippets = await CodeSnippet.find({user:req.user.id}).lean();
        res.render('dashboard',{
            name: req.user.firstName,
            codeSnippets
        });

    }
    catch(err){
        res.render('error/500');
    }
    
}