const express= require("express");

const router= express.Router();
const Comment= require("../models/subscriber")
//Get all 
 router.get("/", async (req,res)=>{
     try{
        const subscribers= await Comment.find()
        res.json(subscribers)
     } catch(err){
         res.status(500).json({message: err.message})
     }
 })
//get one

router.get("/:id", getSubscriber, async (req,res)=>{
    res.send(res.subscriber)
})
//create one

router.post("/", async (req,res)=>{
    const subscriber= new Comment({
        comment:req.body.comment,
        firstName:req.body.firstName
    })
    try{
        const newSubscriber= await subscriber.save();
        res.status(201).json(newSubscriber)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})


//delete one

router.delete("/:id", getSubscriber, async (req,res)=>{
    try{
        await res.subscriber.remove();
        res.status(200).json({message: "user deleted"})
    }
    catch (err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
    
})

async function getSubscriber(req,res,next){
    let subscriber
    try{
        subscriber= await Comment.findById(req.params.id)
        if( subscriber==null){
            return res.status(404).json({message: "user not found"})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }

    res.subscriber=subscriber;
    next()
}
//update one


module.exports= router;