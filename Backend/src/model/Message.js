const mongoose=require('mongoose')

const MessageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },message:{
        type:String,
        required:true
    },sentAt:{
        type:Date,default:Date.now()
    }
})

const MessageModel=mongoose.model("Message",MessageSchema)

module.exports=MessageModel