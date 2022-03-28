import React from "react";
import Axios from "axios"
import { useState ,useEffect} from 'react';
import "./App.css";
function App(){
 const [studName,setstudName] = useState("");
 const [branch,setbranch] = useState("");
 const [newbranch,setnewbranch] = useState("");
 const [studList,setStudList] = useState([]);
 useEffect(()=>{
 Axios.get("http://localhost:3001/read").then((response)=>{
 setStudList(response.data)
 })
 }, [])
 const addToList = () =>{
 Axios.post("http://localhost:3001/insert",{
 studName:studName,
 branch:branch,
 });
 };
 const UpdateBranch = (id) =>{
 Axios.put("http://localhost:3001/update",{
 id:id,
 newbranch:newbranch,
 });
 };
 const deletestud = (id) =>{
 Axios.delete(`http://localhost:3001/delete/${id}`)
 };
 return <div className="App">
 <h1>Employee Management System</h1>

 <div className="student">
 <label>Employee Name:</label>
 <input type="text" placeholder="Full Name" onChange={(event) =>{
 setstudName(event.target.value);
 }}
 />
 </div>

 <div className="student">
 <label>Job Position:</label>
 <input type="text" placeholder="Position Hired For" onChange={(event) =>{
 setbranch(event.target.value);
 }}/>
 </div>
 <button onClick={addToList}>Add </button>
 <h1>______________________________________________________________________</h1>
 <h1>COMPANY EMPLOYEE LIST</h1>
 {studList.map((val,key)=> {
 return (
 <div className="students" key={key}>
 <h3>Name: {val.StudentName}</h3> <h3>Job Position: {val.Branch}</h3>
 <input type="text" placeholder="Promote To.." onChange={(event) =>{
 setnewbranch(event.target.value);
 }}/><button onClick={()=> UpdateBranch(val._id)}>Promote</button>

 <button onClick={()=> deletestud(val._id)}>Fire </button>
 </div>
 );
 })}
 </div>
}
export default App; 
