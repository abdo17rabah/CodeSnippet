const CodeSnippet = require('../models/CodeSnippet');

// @desc Show add Page
//@controller GET /codesnippets/add

module.exports.showAddPage=(req,res)=>{
    res.render('codesnippets/add');
}

// @desc Process add form 
//@controller POST /codesnippets
module.exports.addForm=async (req,res)=>{
    try{
        req.body.user = req.user.id
        await CodeSnippet.create(req.body);
        res.redirect('/dashboard')
    }
    catch(error){
        console.log(error);
        res.render('error/500');
    }
    
}

// @desc Show all code snippets
//@controller GET /codesnippets
module.exports.showAllSnippets=async(req,res)=>{
    try{
        const codeSnippets = await CodeSnippet.find({status : 'public'})
            .populate('user')
            .sort({createdAt:'desc'})
            .lean()
        res.render('codesnippets/index',{
            codeSnippets
        });

    }
    catch(error){
        console.log(error);
        res.render('error/500');

    }
}

// @desc Show single code snippet Page
//@controller GET /codesnippets/add
module.exports.showSingleSnippets=async(req,res)=>{
    try {
        let codeSnippets = await CodeSnippet.findById(req.params.id)
        .populate('user')
        .lean() 

        if(!codeSnippets){
            return res.render('error/404');
        }
        res.render('codesnippets/show',{codeSnippets});
        
    } catch (error) {
        console.log(error);
        res.render('error/404');
    }
}

// @desc Show edit Page
//@controller GET /codesnippets/edit/:id
module.exports.editCodeSnippets=async (req,res)=>{
    try {
        const codeSnippets = await CodeSnippet.findOne({
            _id: req.params.id,
        }).lean();
    
        if(!codeSnippets){
            return res.render('error/404');
        }
    
        if(codeSnippets.user != req.user.id){
            res.redirect('/codesnippets');
        }else{
            res.render('codesnippets/edit',{
                codeSnippets,
            })
    
        }
    } catch (error) {
        console.log(error);
        res.render('error/500');
    }
    
}

// @desc update code snippet
//@controller PUT /codesnippets/:id
module.exports.updateCodeSnippets=async(req,res)=>{
    try {
        let codeSnippets = await CodeSnippet.findById(req.params.id).lean();
    if(!codeSnippets){
        return res.render('error/404');
    }

    if(codeSnippets.user != req.user.id){
        res.redirect('/codesnippets');
    }else{
        codeSnippets = await CodeSnippet.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new :true,
                runValidators:true
            });
            res.redirect('/dashboard');
    }
    } catch (error) {
        console.log(error);
        res.render('error/500');
    }
    
}

// @desc Delete code snippet
//@route DELETE /codesnippets/:id
module.exports.deleteCodeSnippets=async(req,res)=>{
    try {
        await CodeSnippet.remove({_id:req.params.id});
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
        res.render('error/500');
        
    }  
}

// @desc User code snippets Page
//@route GET /codesnippets/user/:userId
module.exports.userCodeSnippets=async(req,res)=>{
    try {
        const codeSnippets = await CodeSnippet.find({
            user:req.params.userId,
            status : 'public'
        })
        .populate('user')
        .lean();

        res.render('codesnippets/index',{
            codeSnippets
        })
    } catch (error) {
        console.log(error);
        res.render('error/500');
        
    }
    
}

