import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Favmain from './Component/Favmain';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Hoome from './Component/home/Hoome';
import Login from './Component/Login/Login';
import Signup from './Component/signup/Signup';

function App() {
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
   
    </>
  );
}

export default App;
