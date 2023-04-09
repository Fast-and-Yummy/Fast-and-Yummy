import './App.css';

import React, { useState,useEffect } from "react";
import axios from 'axios';
import Delete from './Component/Delete';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Favmain from './Component/Favmain';
import Footer from './Component/Footer';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Hoome from './Component/home/Hoome';
import Login from './Component/Login/Login';
import Signup from './Component/signup/Signup';


function App() {


  const [tr, setTr]=useState(true)
const [notes,setNotes]=useState([])



useEffect(() => {
  axios.get("http://localhost:5000/api/Foods/getAll").then(response=>{
    console.log(response.data)
  setNotes(response.data)}).catch(err=>console.log(err))
},[tr])


function deleteFood(id){
    axios.deleteOne("http://localhost:5000/api/Foods/:"+id).then(response=>{
    console.log(response.data);setTr(!tr)
  }).catch(err=>console.log(err))}



const [show,setshow]=useState(false)




  return (
    <div className="App">









      <Router>
        <Routes>
        <Route path="/" element={<MainContent />} />

          <Route    path="/login" element={<Login/>} />
          <Route    path="/Signup" element={<Signup />} />

            
          
        </Routes>
        
      </Router>

  
   { notes && notes.map((e,i)=> {
    return <Delete key={i} id={i} data={e}  deleteFood={deleteFood} />
  })}
  

  <Footer/>

    </div>
    
  );
}

function MainContent() {
  return (
    <>
   <Navbar/>
<Hoome/>
   <Home/>
   <Favmain/>
  
   <Footer/>
    </>
  );
}

export default App;
