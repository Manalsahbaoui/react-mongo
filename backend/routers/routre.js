const express =require("express")
const model = require('../models/model');
const router =express.Router()
router.get("/",(req,res)=>{
model.find().then(()=>{

})
})
router.post('/',async (req,res)=>{

    const{nom,description,status}=req.body;
let new_Tasks = new model({
    nom:req.body.nom,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message
}).then(()=>{
    console.log("data insertion ")
}).catch(()=>{
    console.log("is not connect")
})
await new_Tasks.save()
})
module.exports = router
