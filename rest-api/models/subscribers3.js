const mongoose= require("mongoose")

const commentSchema3= new mongoose.Schema({
    firstName:{
        type: String,
        required: false,
    },
    comment:{
        type:String,
        required:false,
    }
    
})

module.exports= mongoose.model("Comment3", commentSchema3)