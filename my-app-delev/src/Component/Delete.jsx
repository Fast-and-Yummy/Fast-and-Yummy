import React from 'react';


function Delete(props) {

  function handleClick (){
    props.deleteDelete(props.data._id)
  }


  return (
    <div className="delete">
       <h1>{props.data.name}</h1>
      <p>{props.data.dsc}</p>
      <p>{props.data.price}</p>
      <p>{props.data.rate}</p>
      <p>{props.data.country}</p>
      {/* <img src={props.data.img}/> */}
      <button onClick={handleClick}>DELETE</button> 
     
     </div>
  );
}

export default Delete;
