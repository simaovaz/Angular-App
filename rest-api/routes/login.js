const express= require("express");
const router= express.Router();
const UserMovieApp= require("../models/user-movie")

router.post("/", async (req,res)=>{
    const users= await UserMovieApp.findOne({"name":req.body.name, "password":req.body.password}).exec()
    var msg;
    if(users){
        msg= users
    }
    else{
        msg= "invalid login"
    }
    res.json(msg)

})


module.exports= router;