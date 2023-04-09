import React from 'react'
import { useLocation} from 'react-router-dom'
function Order({ordersaved,name,email}) {
  const location = useLocation()
    const { tot = {} } = location.state || {};
 
    const randomorder =  Math.floor(1000 + Math.random() * 9000);

  return (
    <div>
       

 
    <div className="flex justify-center items-center h-screen bg-gray-200 text-gray-900">
    <h1 className="text-3xl font-bold absolute inset-x top-10 h-16 ">Thank you for your order!</h1>
    <div className="rounded-md relative w-72  mt-10 shadow-2xl p-3 bg-white">
      <div className="py-2">
        <div className="text-center text-xl font-bold">ORDER#{randomorder}</div>
        <div className="text-center text-xs font-bold mb-10">The order details</div>
      </div>
    
      <div className="text-xs pl-2">
        <div className="text-xs mb-1">Customer:{name}</div>
        <div className="text-xs mb-1">email:{email}</div>
        <div>OrderNumber:{randomorder}</div>
      </div>
      <div className="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
        <div className="flex text-sm pt-1 px-1">
          <span className="w-2/6">Name</span>
          <span className="w-4/6 text-right">Price</span>
      
        </div>
        <div className="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
{ordersaved.map((e)=>(
    <div className="flex justify-between text-sm">
            <span className="w-2/6 truncate">{e.name}</span>
            <span className="w-2/6 text-right">{e.price }$</span>
           
          </div>
))}
          
        
         
        </div>
      </div>
      <div className="text-xs">
        <div className="mb-1">
        <p>Total : {tot+10} $</p>
        </div>
        <div className="mb-10"></div>
       
      
      </div>
    </div>
  </div>
  </div>
  )
}

export default Order
