import './App.css';

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Delete from './Component/Delete';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Favmain from './Component/Favmain';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hoome from './Component/home/Hoome';
import Login from './Component/Login/Login';
import Signup from './Component/signup/Signup';
import Mainmenu from './Component/menu/Mainmenu';
import DisplayFood from './Component/DisplayFood';
import Shop from './Component/Shop/Shop';



function App() {
  const [shop,setShop]=useState([])
  const addtocard = (option) =>{
    setShop([...shop,option])
    

  }
console.log(shop)
  const [tr, setTr] = useState(true)
  const [notes, setNotes] = useState([])



  useEffect(() => {
    axios.get("http://localhost:5000/api/Foods/getAll").then(response => {
      
      setNotes(response.data)
    }).catch(err => console.log(err))
  }, [tr])


  function deleteFood(id) {
    axios.deleteOne("http://localhost:5000/api/Foods/:" + id).then(response => {
      console.log(response.data); setTr(!tr)
    }).catch(err => console.log(err))
  }





  return (
    <div className="App">









      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
         <Route path='/menu' element={<Mainmenu fn ={addtocard} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Shop" element={<Shop shop={shop}/>} />
          <Route path="/Food" element={<DisplayFood fn ={addtocard} />} />
        </Routes>

      </Router>


    
    
    </div>

  );
}

function MainContent() {
  return (
    <>
      <Navbar />
      <Hoome />
      <Home />
      <Favmain />
    <Footer/>

    </>
  );
}

export default App;
