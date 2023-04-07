import React from 'react'

function Order({ordersaved,name,email}) {
    console.log(ordersaved);
    console.log(name);
    const randomorder =  Math.floor(1000 + Math.random() * 9000);
  return (
    <div>
       

 
    <div class="flex justify-center items-center h-screen bg-gray-200 text-gray-900">
    <h1 className="text-3xl font-bold absolute inset-x top-10 h-16 ">Thank you for your order!</h1>
    <div class="rounded-md relative w-72  mt-10 shadow-2xl p-3 bg-white">
      <div class="py-2">
        <div class="text-center text-xl font-bold">ORDER#{randomorder}</div>
        <div class="text-center text-xs font-bold mb-10">The order details</div>
      </div>
    
      <div class="text-xs pl-2">
        <div class="text-xs mb-1">Customer：{name}</div>
        <div class="text-xs mb-1">email：{email}</div>
        <div>OrderNumber：{randomorder}</div>
      </div>
      <div class="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
        <div class="flex text-sm pt-1 px-1">
          <span class="w-2/6">Name</span>
          <span class="w-4/6 text-right">Price</span>
      
        </div>
        <div class="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
{ordersaved.map((e)=>(
    <div class="flex justify-between text-sm">
            <span class="w-2/6 truncate">{e.name}</span>
            <span class="w-2/6 text-right">{e.price }$</span>
           
          </div>
))}
          
        
         
        </div>
      </div>
      <div class="text-xs">
        <div class="mb-1">
        <p>Total : need to be fixed ya bro raka7 sum w  lifti state w eb3thou $$</p>
        </div>
        <div class="mb-10"></div>
       
      
      </div>
    </div>
  </div>
  </div>
  )
}

export default Order
