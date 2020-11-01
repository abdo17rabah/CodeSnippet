module.exports = {
    //check that the user is authenticated
    ensureAuth: function(req,res,next){
        if(req.isAuthenticated()){
            next();
        }
        else{
            res.redirect('/');
        }
    },
    //check that  the user is a guest
    ensureGuest :function(req,res,next){
        if(req.isAuthenticated()){
            res.redirect('/dashboard');
        }
        else{
            return next();
        }
    }
}