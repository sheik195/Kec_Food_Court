import React from 'react'
import CartBillSection from './CartBillSection'
import CartTableOrderNow from './CartTableOrderNow'

import './Cart.css'
import { useState } from 'react'

function Cart({order,setOrder}) {
  console.log("cart la iruken"+JSON.stringify(order))
  const g_l_s_o =localStorage.getItem('user_order')
  const l_s_o = JSON.parse(g_l_s_o)
  const [userOrders,setUserOrders] = useState(localStorage.getItem("user_order")===null ? [{}] : l_s_o)
  return (

    <>
    {userOrders.length!==0 ? 
       ( <CartBillSection order={order} setOrder={setOrder} userOrders={userOrders}/>)
       :
       (<CartTableOrderNow/>)
    }
    </>


        
   
        
  )
}

export default Cart