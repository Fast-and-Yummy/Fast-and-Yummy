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
      UpdateFood
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <button onClick={uploadImg}>upload</button>
        <img src={url} />
      </div>
      <br />
      <input
        type="text"
        defaultValue={data.name}
        onChange={(e) => setName(e.target.value)}
      />{' '}
      <br />
      <input
        type="text"
        defaultValue={data.dsc}
        onChange={(e) => setDesc(e.target.value)}
      />{' '}
      <br />
      <input
        type="number"
        defaultValue={data.price}
        onChange={(e) => setPrice(e.target.value)}
      />{' '}
      <br />
     <input type="button" value="Update" onClick={updateFood} /> 
    </div>
  );
}

export default EditFood;