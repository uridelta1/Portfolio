const mongoose=require('mongoose')

const AchAchievementSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },issuer:{
        type:String,
        required:true
    },date:{
        type:String
    },description:{
        type:String
    },icon:{
        type:String,
        default:"trophy"
    },order:{
        type:String,
        default:0
    },
},{
    timestamps:true
})


const AchievementModel=mongoose.model("AchAchievement",AchAchievementSchema)

module.exports=AchievementModel