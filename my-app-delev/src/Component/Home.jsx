import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';



function Home() {


  const backgroundImageUrl = 'https://family-images-y24bv7yxalct4.azureedge.net/families/9523/9523_background_1984x900.webp';

  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',



    height: '600px'
  };
  
 
  return (  
    <div style={styles}>
      
      
      <div className='absolute top-10 left-10'>
        <div className='absolute top-48 left-10'>
        <p className='font-bold text-white  bg text-lg'>ENJOY YOUR MEAL WITH FAST  <span className='text-yellow-300'>&& </span>YUMMY</p>
        </div>
       
        <h1 className='text-1xl h-56 grid grid-cols-3 gap-4 content-center'></h1>
        <span className=" font-bold box-decoration-clone  text-7xl red text-white px-8 ...">
          Good food is  wise<br></br>
          <span className='text-yellow-500 '>medicine</span>
          <br></br>

        </span>
      
        
<br></br>
       <Link className='m-8  text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-8 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' to="/menu">Order Food</Link> 
      </div>

    </div>



  );
}


export default Home