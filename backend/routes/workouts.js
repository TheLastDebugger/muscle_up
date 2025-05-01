 const express = require("express");

 const router = express.Router();


 //get
 router.get("/sayHello",(req,res) => {

    res.json({message :"Hello From Srinivas"})

 })

 router.get("/sayHello/:id",(req,res) => {
   res.json({get : "Single Workout"})
 })


 router.post("/sayHello",(req,res) => {
   res.json({msg:"Hello from Srinivas in Post"})
 })

 router.delete("/sayHello/:id",(req,res) => {
   res.json({msg:"Hello from Srinivas in Delete"})
 })

 router.patch("/sayHello/:id",(req,res) => {
   res.json({msg:"Hello from Srinivas in Patch"})
 })



 router.delete("/delete/:id",(req,res) => {
   res.json({msg:"Hello from Srinivas in Patch"})
 })

 
 module.exports = router