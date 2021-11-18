const express = require('express');
const router = new express.Router();
const db = require('./db/model/studentModel')

router.post('/students',(req,res)=>{
    const data = new db(req.body); 
    data.save().then(()=>{
        res.status(201).send("Data Has Been Saved");
    }).catch((err)=>{
        res.status(401).send(err);
    })

});
router.get('/students',async(req,res)=>{
    try{
       const studentData = await db.find();
       res.send(studentData);        
    }catch(e){
        console.log(e);
    }
})

router.get('/students/:id',async(req,res)=>{
    try{
        const stdData = await db.findById(req.params.id);
        res.send(stdData);        
    }catch(e){
        console.log(e);
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
        
        const deletedData = await db.findByIdAndDelete(req.params.id);
        if(!deletedData){
            res.status(402).send();
        }else{
            res.status(200).send(deletedData);
        }
    }catch(e){
       res.status(404).send(e);
    }
})

router.patch("/students/:id",async (req,res)=>{
    try{
        let _id = req.params.id;
        const UpdatedData = await db.findByIdAndUpdate(_id,req.body,{new:true});
        if(!UpdatedData){
            res.status(400).send(UpdatedData);
        }else{
            res.status(200).send(UpdatedData);
        }
    }catch(e){
        res.status(404).send(e);
    }
})

module.exports = router;