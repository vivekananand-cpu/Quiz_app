var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/college" , {
    
}).then(function (){
    console.log("connection sucessful");
}).catch(function(err){
    console.log(err);
});