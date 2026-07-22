const express=require('express')
const AchievementModel=require('../model/Achievement')

const router=express.Router()

router.get("/",async function(req,res) {
    try {
        const Achievement=await AchievementModel.find().sort({order:1,date:-1})
        res.status(200).json({
            message:"Achievement fetched successfully",
            Achievement
        })
    } catch (err) {
        res.status(500).json({
            message:"failed to fetch Achievement ",
            error:err.message
        })
    }
    
})

router.post("/",async function (req,res) {
    try {
        const Achievement=await AchievementModel.create(req.body)
        res.status(201).json({
            message:"Achievement added successfully",
            Achievement
        })
    } catch (err) {
        res.status(400).json({
            message:"failed to add Achievement ",
            error:err.message
        })
    }
})

module.exports=router