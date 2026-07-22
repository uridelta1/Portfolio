const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stack: [{ type: String }],
  image: { type: String },
  liveUrl: { type: String },
  repoUrl: { type: String },
  order: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
},{
    timestamps:true
});


const ProjectModel=mongoose.model("Project",ProjectSchema)

module.exports=ProjectModel