const express = require("express");
const mongoose=require("mongoose");
const app = express();
const uri="mongodb+srv://root:root@startupboard.mf8es7e.mongodb.net/?retryWrites=true&w=majority&appName=Startupboard";
async function connect(){
  try{
      await mongoose.connect(uri);
      console.log("connection successful to Users database");
  }
  catch(e){
      console.log("connection failed");
  }
}

connect();

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['investor', 'founder'], required: true }
});

module.exports = mongoose.model('User', UserSchema);
