import React from 'react'
import './PaymentSucessful.css'

function PaymentSuccessful() {





  

  return (
    <div className='Payment_successful' >
        <p>Payment <span id='text_yellow'>Successful</span></p>

        <div class="wrapper"> 
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
        </div>

        <div className='delivery_otp'>
          <p id='delivery_text1'>You will shortly recive the <span id='text_yellow'>OTP</span> in <span>MAIL</span></p>
          <p id='delivery_text1'>and <span id='text_yellow'>ORDER CONFIRMATION</span>  <span>MAIL</span></p>

          {/* <p id='delivery_text1'>OTP is </p>
          <div className='otp_final'>

            <p>2566</p>

          </div> */}
        </div>
        
    </div>
  )
}

export default PaymentSuccessful