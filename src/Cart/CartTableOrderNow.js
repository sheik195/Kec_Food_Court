import React from 'react'
import { useNavigate } from 'react-router';
import burger from '../Assets/home_burger.gif';


function CartTableOrderNow() {

  const navigate = useNavigate()
  return (
      <div className='cart_table_order_now'>
          <p id='text_your_order'>Your <span id='text_yellow'>ORDERS</span> will be displayed here</p>
          <p id='text_take_up'>Take up your</p>
          <button id='button_order_here' onClick={()=>navigate('../ordernow')}>ORDER  NOW</button>
      </div>
      

  )
}

export default CartTableOrderNow