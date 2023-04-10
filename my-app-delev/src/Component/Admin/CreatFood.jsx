import axios from 'axios'
import React, { useState } from 'react'


function CreatFood () {
const [file,setFile]=useState("")
const [url,setUrl]=useState("")
const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const [price,setPrice]=useState(0)

const uploadImg = async()=>{

  const form = new FormData()
  form.append("file",file)
  form.append("upload_preset","jassery")

 await axios.post("https://api.cloudinary.com/v1_1/dj6am9a7q/upload",form).then((reslt)=>
 setUrl(reslt.data.secure_url))

}

console.log(url);

const zid =()=>{
    axios.post("http://localhost:5000/api/Foods/add",{name:name,dsc:desc,img:url,price:price,}).then((reslt)=>{
alert("added to menu")
    }).catch((err)=>{
      console.log(err)
    })


  }


  return (
<div className="bg-gray-100 p-4 rounded-md">
  <div className="flex items-center mb-4">
    <label className="mr-2">Upload Image:</label>
    <input type="file" onChange={(e) => {setFile(e.target.files[0])}} className="border border-gray-400 px-2 py-1 rounded-md" />
    <button onClick={uploadImg} className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white">Upload</button>
  </div>
  <img src={url} className="mb-4 rounded-md" />

  <label className="block mb-2 font-medium">Name:</label>
  <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} className="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

  <label className="block mb-2 font-medium">Description:</label>
  <input type="text" placeholder="Description" onChange={(e) => {setDesc(e.target.value)}} className="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

  <label className="block mb-2 font-medium">Price:</label>
  <input type="number" placeholder="Price" onChange={(e) => {setPrice(e.target.value)}} className="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

  <button onClick={zid} className="px-4 py-2 rounded-md bg-blue-500 text-white">Add</button>
</div>
    
  )
}

export default CreatFood;