import React from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'

import Home from './Home/Home';
import FoodItems from './FoodItems/FoodItems';
import ChatItems from './ChatItems/ChatItems';
import LoginPage from './Login/LoginPage';
import Cart from './Cart/Cart';

import LandingPageTwo from './Home/LandingPageTwo';
import JuiceItems from './JuiceItems/JuiceItems';
import PaymentSuccessful from './GooglePay/PaymentSuccessful';

function NavigationTwo({order,setOrder}) {


  const navigate = useNavigate()

  React.useEffect(()=>{
    if(localStorage.getItem("ph")===null)
    {
      navigate('../login');
    }
   
   },[])


return(
    <Routes>

          <Route path='/ordernow' element={<LandingPageTwo/>} />
            
            <Route path='/cart' element={<Cart order={order} setOrder={setOrder}/>} />
            <Route path='/payment_sucessful' element={<PaymentSuccessful/>} /> 
            <Route path='/ordernow' element={<LandingPageTwo/>} />

    </Routes>
)
 

        
            
            

  
 }


export default NavigationTwo