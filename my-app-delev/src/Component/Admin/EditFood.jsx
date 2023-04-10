import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditFood() {

  const location = useLocation()
  const {data}=location.state

  console.log(data,"dataaaaaaaa")

  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');
  const [name, setName] = useState(data.name);
  const [desc, setDesc] = useState(data.dsc);
  const [price, setPrice] = useState(data.price);
  

  const uploadImg = async () => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'jassery');

    await axios
      .post('https://api.cloudinary.com/v1_1/dj6am9a7q/upload', form)
      .then((reslt) => setUrl(reslt.data.secure_url));
  };

  console.log(url);
  console.log(file);

 
  const updateFood = () => {
    axios
      .put(`http://localhost:5000/api/Foods/${data._id}`, {
        name: name,
        dsc: desc,
        img: url,
        price: price,
      })
      .then((reslt) => {
        console.log(reslt);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
<div className="bg-gray-100 p-4 rounded-md">
  <div className="flex items-center mb-4">
    <label className="mr-2">Upload Image:</label>
    <input type="file"  onChange={(e) => setFile(e.target.files[0])} className="border border-gray-400 px-2 py-1 rounded-md" />
    <button className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white" onClick={uploadImg}>Upload</button>
    <img src={url} className='w-32' />
  </div>


  <label className="block mb-2 font-medium">Name:</label>
  <input type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

  <label className="block mb-2 font-medium">Description:</label>
  <input type="text" defaultValue={data.dsc} onChange={(e) => setDesc(e.target.value)} className="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

  <label className="block mb-2 font-medium">Price:</label>
  <input type="number" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

  <button  type="button" value="Update"  onClick={updateFood} className="px-4 py-2 rounded-md bg-blue-500 text-white">Update</button>
</div>
</div>
  );
}

export default EditFood;