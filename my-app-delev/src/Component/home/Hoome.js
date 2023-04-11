import React from 'react'
import { Link } from "react-router-dom";
function Hoome({email}) {

  return (
    <div>
    {email ? (
      <div>
     
     <h1 className='absolute left-3/4 top-3 ml-56 z-30 py-2 px-4 text-sm bg-yellow-400 rounded-xl border-none font-bold text-white uppercase transition-colors duration-300 hover:bg-yellow-600 cursor-pointer'>
          <Link   > {email}</Link>
        </h1>
      </div>
    ) : (
      <div>
        <h1 className='absolute left-3/4 top-3 ml-60 z-30 py-2 px-4 text-sm bg-yellow-400 rounded-xl border-none font-bold text-white uppercase transition-colors duration-300 hover:bg-yellow-600 cursor-pointer'>
          <Link to="/login">Login</Link>
        </h1>
      </div>
    )}
  </div>
);
}

  


export default Hoome