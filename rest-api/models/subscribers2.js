const mongoose= require("mongoose")

const commentSchema2= new mongoose.Schema({
    firstName:{
        type: String,
        required: false,
    },
    comment:{
        type:String,
        required:false,
    }
    
})

module.exports= mongoose.model("Comment2", commentSchema2)