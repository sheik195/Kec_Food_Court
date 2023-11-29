import React from 'react'
import JuiceItemsOrders from './JuiceItemsOrders'
import './JuiceItems.css'

function JuiceItems({order,setOrder}) {
  return (
    <div className='Juice_Items'>
        <JuiceItemsOrders order={order} setOrder={setOrder}/>
    </div>
  )
}

export default JuiceItems