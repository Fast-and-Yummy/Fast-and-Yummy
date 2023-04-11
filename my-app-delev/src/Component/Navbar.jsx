import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar({count,x}) {
  const navigate = useNavigate()
 
  return (
    <div>
    <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
      
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
         <p className='text-yellow-300 text-lg -ml-10   font-extrabold'>FAST && YUMMY</p>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
         
            <a href="" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"> <Link to="/">Home</Link></a>

            <a href="" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">      <Link to="/menu">Order online</Link></a>

            <a href="" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link to="/Contact">Contact Us</Link></a>

           
          </div>
        </div>
      </div>
      <div className="  mr-20">
        <button onClick={()=>{navigate("/Shop")}} type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      
         
          
     <p className='text-red-500'>{count}</p>
        <svg  className="h-6 w-6" stroke-width="1.5" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </ button>
        

      
      </div>
    </div>
  </div>

 
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
     
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Pages</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
      <Link to="/menu">Order online</Link>
      </a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">News</a>


    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar