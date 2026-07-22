const express=require('express')
const Project=require('../model/Project')

const router=express.Router()

router.get("/",async function (req,res) {
    try {
        const projects=await Project.find().sort({order:1,createdAt:-1})
        res.status(200).json({
            message:"project fetch successfully",
            projects

        })
    } catch (err) {
        res.status(500).json({
            message:"failed to fetch projects",
            error: err.message
        })
    }
})


router.post("/",async function(req,res) {
    try {
        const projects=await Project.create(req.body)
        res.status(201).json({
            message:"projectn added successfully "
        })
    } catch (err) {
        res.status(500).json({
            message:"failed to add projects"
        },err)
    }
})


module.exports=router