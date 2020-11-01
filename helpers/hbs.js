const moment = require('moment');

module.exports={
    // formate the date on the code snippets cards
    formatDate : function(date,format){
        return moment(date).format(format);
    },
    // truncate the text in the code snippets cards
    truncate : function(str, len){
        if(str.length > len){
            let newStr = '';
            newStr=str.substr(0,len);
            newStr=str.substr(0,newStr.lastIndexOf(''));
            newStr=newStr.length>0 ? newStr : str.substr(0,len)
            return newStr+'...'
        }
        return str;
    },
    // Delete html tags on the text
    stripTags:function(input){
        return input.replace(/<(?:.|\n)*?>/gm,'');
    },
    // add edit button on the codesnippets
    editIcon: function(snippetUserId, loggedUser, codeSnippetId, floating=true){
        //console.log("##### Debug",snippetUserId._id , loggedUser._id) ;
        if(snippetUserId._id.toString() == loggedUser._id.toString()){
            if(floating){    
                return `<a href="/codesnippets/edit/${codeSnippetId}" class="btn-floating
            halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
            }
            else{
                return `<a href="/codesnippets/edit/${codeSnippetId}"><i class="fas fa-edit"></i></a>`
            }
        }
        else{
            return '';
        }
    },
    //choose the correct select option according to the code snippet status (StackOverFlow)
    select : function(selected, options){
        return options
        .fn(this)
        .replace(
            new RegExp(' value="' + selected + '"'),
            ' selected="selected"$&'
        )
    },

}