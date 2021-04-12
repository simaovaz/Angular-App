const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type:String
    },
    posts:{
        type: Array
    }
    
})

module.exports= mongoose.model("UserMovieApp", userSchema)