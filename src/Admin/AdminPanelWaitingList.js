import axios from 'axios'
import React from 'react'
import { json } from 'react-router'
import TransitionsModal from './TransitionsModal'
const AdminPanelWaitingList =({items,pastPayments,setPastPayments,readyClickFunc})=> {

  const [past_payments,setPast_Payments] = React.useState([{}])

  // console.log("waiting List   "+JSON.stringify(items))
 
  //   readyFunc(items.id,items.userId)
  // }
  const [amount,setAmount]=React.useState(0)


  // const readyFuncCall=()=>{

  
  return (
    <div className='waiting_list_details'>

        <p id='bill_no_box'>{items.billNo}</p>
        {/* <p id='amount_box'>$ {items.amount}</p> */}
        
        <TransitionsModal 
          items={items} 
          amount={amount}
          setAmount={setAmount} />


        <button id='ready_to_serve_button' onClick={()=>readyClickFunc(items.billNo,items.amount,items.otp,items.id,items.userId)}>READY</button>

{/*         
        <p id='otp_circle'>
           <span id='span_left'>OTP</span> <span id='span_right'>{items.otp}</span>
        </p> */}
        


    </div>
  )
}

export default AdminPanelWaitingList