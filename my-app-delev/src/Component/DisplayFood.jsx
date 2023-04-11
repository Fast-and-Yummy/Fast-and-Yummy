import React,{useState}from 'react'
import { useLocation, useNavigate ,Link } from 'react-router-dom'
import Navbar from './Navbar'

const DisplayFood = ({fn,handleCardCount}) => {

   
    const location = useLocation()
    const { data = {} } = location.state || {};

  return (
    <div>
    <div style={{ position: 'relative', zIndex: 11 }}>
   
  </div>
    <  div class=" " role="dialog" aria-modal="true">
   
  <div class="fixed inset-0 hidden bg-yellow-400 bg-opacity-75 transition-opacity md:block"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
     
      <div class="flex w-full  transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div class="relative  mt-20 flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
         
          <Link to="/menu" className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'>BACK</Link>
           
    

          <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={data.img}  alt="Two each of gray, white, and black shirts arranged on table." class="object-cover object-center"/>
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{data.dsc}</h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p class="text-2xl text-gray-900 ">{data.price} $</p>

              
                <div class="absolute left top-48 " >
                  <h4 class="sr-only">{data.rate}</h4>
                  <div class="flex items-center">
                    <div class="flex items-center">
                    
                      <svg class="text-yellow-400 h-5  w-5 flex-shrink-0"  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>

                      <svg class="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="sr-only">3.9 out of 5 stars</p>
                    <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{data.rate} / 5</a>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading" class="mt-10">
                <h3 id="options-heading" class="sr-only">Product options</h3>

           
           

                  
                  <div class="mt-40">
                   

                    <fieldset class="mt-4">
                      <legend class="sr-only"> pizza size</legend>
                      <div class="grid grid-cols-4 gap-4">
                       
                     
                       
                    

                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label"/>
                          <span id="size-choice-3-label">M</span>

                   
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>

                  
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label"/>
                          <span id="size-choice-4-label">L</span>

                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>

                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label"/>
                          <span id="size-choice-5-label">XL</span>

                        
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>

                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XXL" class="sr-only" aria-labelledby="size-choice-6-label"/>
                          <span id="size-choice-6-label">XXL</span>

                     
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>

                     
                      </div>
                    </fieldset>
                  </div>

                  <button onClick={()=>{
                    handleCardCount()
                    fn(data)
                  
                  }} class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                
              </section>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

</div>
                
               
            
    
  )
}

export default DisplayFood
