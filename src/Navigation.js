import React from 'react'
import {Routes,Route} from 'react-router-dom'

import './Navigation.css';

import Navbar from './Navbar'

import Home from './Home/Home';
import FoodItems from './FoodItems/FoodItems';
import ChatItems from './ChatItems/ChatItems';
import LoginPage from './Login/LoginPage';
import Cart from './Cart/Cart';

import LandingPageTwo from './Home/LandingPageTwo';
import JuiceItems from './JuiceItems/JuiceItems';
import PaymentSuccessful from './GooglePay/PaymentSuccessful';
import NavigationTwo from './NavigationTwo';
// import NavigationTwo from 


function Navigation() {

  const [isLoading,setIsLoading]= React.useState(false);
  var [order,setOrder]=React.useState([]);
  
  return (
    <div className='holder'>
        <Navbar/>
        <Routes>
          
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/fooditems' element={<FoodItems order={order} setOrder={setOrder}/>} />
            <Route path='/chatitems' element={<ChatItems order={order} setOrder={setOrder}/>} />
            <Route path='/juiceitems' element={<JuiceItems order={order} setOrder={setOrder}/>} />
            <Route path='/*' element={<NavigationTwo order={order} setOrder={setOrder}/>}/>

            {/* <Route path='/ordernow' element={<LandingPageTwo/>} />
            <Route path='/fooditems' element={<FoodItems order={order} setOrder={setOrder}/>} />
            <Route path='/chatitems' element={<ChatItems order={order} setOrder={setOrder}/>} />
            <Route path='/juiceitems' element={<JuiceItems order={order} setOrder={setOrder}/>} />
            <Route path='/cart' element={<Cart order={order} setOrder={setOrder}/>} />
            <Route path='/payment_sucessful' element={<PaymentSuccessful/>} /> */}

        </Routes>
    </div>
  )
}

export default Navigation