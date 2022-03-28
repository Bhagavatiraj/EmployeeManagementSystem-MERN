const mongoose=require('mongoose');
const StudSchema=new mongoose.Schema({
 StudentName:{
 type:String,
 required:true,
 },
 Branch:{
 type:String,
 required:true,
 },
});
const Stud=mongoose.model("StudData",StudSchema);
module.exports=Stud; 
