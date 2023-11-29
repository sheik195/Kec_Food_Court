import React, { useState } from 'react'
import './CartBillSection.css'
import CartBillSectionTable from './CartBillSectionTable';
import GooglePay from '../GooglePay/GooglePay';
import CartTableOrderNow from './CartTableOrderNow';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid'
import { useNavigate } from 'react-router';


function CartBillSection({order,setOrder,userOrders}) {
  
    const date = new Date()
    let CurrentDate = date.getDate()
    
    const [jello,setJello] = useState(0);
    var orderTotalPrice = 0;

    const navigate=useNavigate()

    const dishTotalPrice = (price,count)=>{
 
        return(price*count);
    }

    const setJelloAnim = (jelloState) => {
        setJello(jelloState);
    }

    const content=userOrders.map((item)=>{

        orderTotalPrice= orderTotalPrice+dishTotalPrice(item.price,item.count)
        console.log(JSON.stringify(item))
        
        return( <CartBillSectionTable
        
         item={item}
         setJelloAnim={setJelloAnim}
         orders={userOrders} 
         setOrder={setOrder}
     />)

    })

    const ProceedToPay =()=>{

        // console.log(JSON.stringify(
                
        //     {id:124,
        //    userId:localStorage.getItem("ph"),
        //     date:CurrentDate,
        //     orders:userOrders
        // }
        //  ));
        const nanoid = customAlphabet('1234567890', 10)
        const model= nanoid()
        console.log(model)
        
        axios.post(
            'http://localhost:8080/bill',
            JSON.stringify(
              {
                  "email_id":localStorage.getItem('ph'),
                  "bill_id":model
                  
              }),
              {
                headers:{
                    'Content-Type':'Application/json'
                }
  
              }
  
          ).then((res)=>{
            
            var otp=0;
            axios.get(
                `http://localhost:8080/reqotp?email=${localStorage.getItem('ph')}`
            ).then((res1)=>{

                otp=res1.data
                console.log(otp)
                axios.post(
                    'http://localhost:3500/order_details',
                    {
                         userId:localStorage.getItem("ph"),
                         date:CurrentDate,
                         orders:userOrders,
                         amount:orderTotalPrice,
                         billNo:model,
                         otp:otp
                     }

                ).then((res)=>{
                    navigate('../payment_sucessful')
                })
                
                
            })

  
            console.log("actual sent"+res.data)
          })   


        
          
          
    }

    

    console.log(userOrders.length)


  return (
    <div className='Cart_bill_section'>


        <table className='cart_table'>
            <thead>
                <tr>
                <td>NAME</td>
                <td>PRICE</td>
                <td>COUNT</td>
                
                <td>TOTAL</td>
                <td>ACTION</td>
                </tr>
            </thead>
            <tbody>

                {content}                
                                
            </tbody>
        </table>

        <div className='cart_section'>

            <div className='total_section'>

                <div className='total_circle'>
                    <div className='total_pin_circle'>

                    </div>

                </div>

                <div className='total'>
                    <p id='order_bill_id'>TOTAL</p>
                    {/* <hr></hr> */}
                    <div 
                        className='order_total_price_circle'
                        onAnimationEnd={() => setJello(0)}
                        jello={jello}>
                             <p id='order_total_price'jello={jello} >{orderTotalPrice}</p>
                    </div>
                </div>
            </div>
            <br></br>

            <div className='payment'>
                <p onClick={ProceedToPay} >PROCEED TO PAY</p>
                <GooglePay orderTotalPrice={orderTotalPrice} userOrders={userOrders} />

            </div>
            

            
        </div>

    </div>
  )
}

export default CartBillSection