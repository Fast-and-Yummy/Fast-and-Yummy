import './App.css';

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Delete from './Component/Delete';
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


function App() {
  const [shop,setShop]=useState([])
  const [savename,setname]= useState()
  const [saveemail,setnemail]= useState()

  const handleInput=(event) =>{
    setname(event.target.value)

  }
  const handleemail=(event) =>{
    setnemail(event.target.value)
    
  }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // return (
  //   <div>
  //     <label>
  //       First name:
  //       <input type="text" value={firstName} onChange={handleFirstNameChange} />
  //     </label>
  //     <br />
  //     <label>
  //       Last name:
  //       <input type="text" value={lastName} onChange={handleLastNameChange} />
  //     </label>
  //     <br />
  //     <NameChecker firstName={firstName} lastName={lastName} />
  //   </div>
  // );



  
  
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

{/* <div className='login'>
      <label>
        ADMIN:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        PASSWORD:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <NameChecker firstName={firstName} lastName={lastName} />
    </div> */}






      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
         <Route path='/menu' element={<Mainmenu fn ={addtocard} />}/>
         <Route path='/admins' element= {<NameChecker/>}/>
         <Route path='/welcomeAdmin' element= {<WelcomeAdmin/>}/>
          <Route path="/login" element={<Login /> } />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Shop" element={<Shop shop={shop} onInputChange={handleInput} emailsaved={handleemail}/>} />
          <Route path="/Food" element={<DisplayFood fn ={addtocard} />} />
          <Route path="/order" element={  <Order ordersaved={shop} name={savename} email={saveemail} />} />
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
      {/* <NameChecker/> */}
      <Favmain />
    <Footer/>
  

    
 
    
    </>
  );
}

export default App;
