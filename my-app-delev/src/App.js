import './App.css';

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Favmain from './Component/Favmain';
import Footer from './Component/Footer';
import WelcomeAdmin from './Component/Admin/WelcomeAdmin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NameChecker from './Component/Admin/NameChecker';
import Hoome from './Component/home/Hoome';
import Login from './Component/Login/Login';
import Signup from './Component/signup/Signup';
import Mainmenu from './Component/menu/Mainmenu';
import DisplayFood from './Component/DisplayFood';
import Shop from './Component/Shop/Shop';
import Order from './Component/Order/Order';
import EditFood from './Component/Admin/EditFood';
import Contact from './Component/about/Contact';
import CreatFood from './Component/Admin/CreatFood';





function App() {
  const [email, setEmail] = useState("");
  const [shop,setShop]=useState([])
  const [savename,setname]= useState()
  const [saveemail,setnemail]= useState()
  const [count, setCount] = useState(0);
const [tr, setTr]=useState(true)
const [notes,setNotes]=useState([])


  const handleCardCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleInput=(event) =>{
    setname(event.target.value)


  }
  const handleemail=(event) =>{
    setnemail(event.target.value)
    
  }
  const handleemailprofile=(x)=>{
    setEmail(x)
  }
  console.log( email);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };





  
  
  const addtocard = (option) =>{
    setShop([...shop,option])
    

  }








  useEffect(() => {
    axios.get("http://localhost:5000/api/Foods/getAll").then(response => {
      
      setNotes(response.data)
    }).catch(err => console.log(err))
  }, [tr])








  return (
    <div className="App">






      <Router>
        <Routes>
          
       
        <Route path="/Contact" element={<  Contact/>} />
          <Route path="/" element={<MainContent email={email} />} />
         <Route path='/menu' element={<Mainmenu fn ={addtocard} email={email} handleCardCount={handleCardCount} count={count} />}/>
          <Route path="/login" element={<Login  handleemailprofile={handleemailprofile}/>} /> 
          <Route path="/welcomeAdmin" element={<WelcomeAdmin/>} />
          <Route path="/admin" element={<NameChecker/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Shop" element={<Shop shop={shop} onInputChange={handleInput} count={count}    emailsaved={handleemail}/>} />
          <Route path="/Food" element={<DisplayFood fn ={addtocard}  />} />
          <Route path="/order" element={  <Order ordersaved={shop}  name={savename} email={saveemail} />} />
          <Route path="/Edit" element={<EditFood />} />
          <Route path="/add" element={<CreatFood />} />
        </Routes>

      </Router>


  

  

  

  

     

    
    
    </div>

  
)}


function MainContent({email}) {
  return (
    
    <>

      <Navbar   />
      <Hoome email={email} />
      <Home />
      <Favmain />
    <Footer/>
  

    
 
    

    </>
  );
}

export default App;
