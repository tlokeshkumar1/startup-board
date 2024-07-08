const express = require("express");
const mongoose=require("mongoose");
const app = express();
const uri="mongodb+srv://root:root@startupboard.mf8es7e.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";
async function connect(){
  try{
      await mongoose.connect(uri);
      console.log("connection successful to Posts database");
  }
  catch(e){
      console.log("connection failed");
  }
}

connect();

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
