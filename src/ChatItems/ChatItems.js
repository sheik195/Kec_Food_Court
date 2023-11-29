import React from 'react'
import './ChatItems.css'
import ChatItemsOrders from './ChatItemsOrders'


function ChatItems({order,setOrder}) {
  return (
    <div className="Chat_Items">
        
        <ChatItemsOrders order={order} setOrder={setOrder}/>
    </div>
  )
}

export default ChatItems