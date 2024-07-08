const express = require("express");
const mongoose=require("mongoose");
const app = express();
const uri="mongodb+srv://root:root@cluster0.0x8lyfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function connect(){
  try{
      await mongoose.connect(uri);
      console.log("connection successful to Blogs database");
  }
  catch(e){
      console.log("connection failed");
  }
}

connect();

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);
