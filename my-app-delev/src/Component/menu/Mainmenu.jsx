import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Navbar'
import Hoome from '../home/Hoome';
import axios from 'axios';

function Mainmenu({fn,handleCardCount,count,email}) {



  const navigate = useNavigate()
  

  const [datas,saved]= useState([])
  const backgroundImageUrl = 'https://img.freepik.com/premium-photo/chef-cook-fries-meat-beef-steak-open-fire-restaurant_127425-660.jpg';

  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    filter: 'brightness(70%)',
  };

  useEffect(()=>{
  axios.get("http://localhost:5000/api/Foods/getall").then((res)=>{
    saved(res.data);
  }).catch((err)=>{
    console.log(err);
  })

  })

  const handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight / 4);
  };

  const handleClicks=(event, e)=> {
    event.preventDefault()
    navigate("/Food", { state: { data: e } })
  }
  
  return (
    

    <div>
  
<Navbar count={count}/>




      <div style={styles} >


      </div>
      <div className="relativeh-40">
      <div className="absolute inset-x-0 top-36 h-16 flex justify-center items-center">
        <div className="text-center text-white">
          <p className="text-3xl font-bold tracking-wider uppercase">COLLECTION</p>
          <p className="text-lg font-medium text-yellow-300">
            <Link to="/" className="hover:text-white transition-colors duration-300">
              Home
              
             </Link>
               / <span className='hover:text-white transition-colors  cursor-pointer duration-300' onClick={handleClick} >Food</span>
          </p>
        </div>
      </div>
    </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">


          <div className="mt-1 grid grid-cols-1  gap-y-32 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">

            {datas.map((e)=>(

<div className="group relative ">
<div className="min-h-80   aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
  <img src={e.img} alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
  />
</div>
<div className="mt-4 flex justify-between">
  <div>
    <h3 className="text-sm text-gray-700">
      <div className="flex items-center mb-2">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{e.rate} out of 5</p>
      </div>
      <a href="" onClick={(event) => handleClicks(event, e)}>*

      
        <span aria-hidden="true" className="absolute inset-0"></span>
        {e.dec}
      </a>
    </h3>
    <p className="mt-1 text-sm text-gray-500">{e.name}</p>
  </div>
  <div>
    <p className="text-sm font-medium text-gray-900"> price : ${e.price}</p>

    <span  onClick={()=>{
      fn(e) 
      handleCardCount() }} className='text-center mt-10 ml-3 absolute left-20 border-solid border-2 px-3 py-1 rounded-md  cursor-pointer  bg-yellow-500/100 text-white'> Add to card</span>
  </div>
</div>
</div>
            ))}
           
           

          </div>

        </div>
      </div>

    </div>
  )
}

export default Mainmenu