import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'


function CreatFood () {
const [url,setUrl]=useState("")
const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const [price,setPrice]=useState(0)


const zid =()=>{
    axios.post("http://localhost:5000/api/Foods/add",{name:name,dsc:desc,img:url,price:price,}).then((reslt)=>{
console.log(reslt)
    }).catch((err)=>{
      console.log(err)
    })


  }


  return (
    
    <div >CreatFood

<input type="text" placeholder='url' onChange={(e)=>{setUrl(e.target.value)}}/> 
<input type="text" placeholder='name' onChange={(e)=>{setName(e.target.value)}} /> 
<input type="text" placeholder='dec' onChange={(e)=>{setDesc(e.target.value)}}/>  
<input type="number" placeholder='price' onChange={(e)=>{setPrice(e.target.value)}}/> 

<input type="button" value="Creat" onClick={zid}/>


    </div>
    
  )
}

export default CreatFood;