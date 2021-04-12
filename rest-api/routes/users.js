const express= require("express");
const bcrypt= require("bcrypt")
const router= express.Router();
const UserMovieApp= require("../models/user-movie")
//Get all 
 router.get("/", async (req,res)=>{
     try{
        const users= await UserMovieApp.find()
        res.json(users)
     } catch(err){
         res.status(500).json({message: err.message})
     }
 })
//get one

router.get("/:id", getUser, async (req,res)=>{
    res.send(req.body.id)
})
//create one

router.post("/", async (req,res)=>{
    //const hashedPassword= await bcrypt.hash(req.body.password,10);
    const newUser= new UserMovieApp({
        name:req.body.name,
        password:req.body.password,
        posts: req.body.posts
    })
    const users= await UserMovieApp.find()
    var msg=0;
    var final
    await users.forEach( async(user)=>{
            if(req.body.name===user.name){
                msg=1
            }
    })
    if(msg===0){
        var novo= await newUser.save();
        final=novo;
    }
    else{
        final= "user já registado"
    }
    res.json(final)
    
})


//delete one

router.delete("/:id", getUser, async (req,res)=>{
    try{
        await res.user.remove();
        res.status(200).json({message: "user deleted"})
    }
    catch (err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
    
})

//patch one

router.patch("/:id", getUser, async (req,res)=>{
    res.user.posts= req.body.posts;
    try{
        const updatedUser= await res.user.save();
        res.json(updatedUser)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})
async function getUser(req,res,next){
    let user
    try{
        user= await UserMovieApp.findById(req.params.id)
        if( user==null){
            return res.status(404).json({message: "user not found"})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }

    res.user=user;
    next()
}
//update one


module.exports= router;