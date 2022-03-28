const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
const app=express()
const StudModel=require("./models/Stud")
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://bhagavatiraj:bingo1234@cluster0.7v0pp.mongodb.net/Students?retryWrites=true&w=majority",
{
 useNewUrlParser:true,}
);
app.post("/insert",async (req,res)=>{
const StudentName=req.body.studName
const branch=req.body.branch
const stud = new StudModel({StudentName:StudentName,Branch:branch});
 try{
 await stud.save();
 res.send("inserted data");

 }
 catch(err){
 console.log(err);
 }

});
app.get('/read',async (req,res)=>{
 StudModel.find({},(err,result)=>{
 if(err){
 res.send(err);
 }
 res.send(result)
 })
});
app.put('/update',async (req,res)=>{
 const newbranch=req.body.newbranch
 const id=req.body.id
 try{
 await StudModel.findById(id,(err,updatedbranch)=>{
 updatedbranch.Branch=newbranch
 updatedbranch.save()
 res.send("update")
 });
 }catch(err){
 console.log(err);
 }
});
app.delete("/delete/:id",async(req,res)=>{
 const id=req.params.id;
 try{
 await (await StudModel.findByIdAndRemove(id)).exec();
 res.send("deleted");
 }catch(err){
 console.log(err);
 }
});
app.listen(3001,()=>{
 console.log('Server running on 3001...');
}); 