import React from 'react'
import './LandingPageTwo.css'
import LandingPageCategory from './LandingPageCategory'
import { Navigate, useNavigate } from 'react-router'
function LandingPageTwo() {

  const navigate = useNavigate()


  React.useEffect(()=>{
    if(localStorage.getItem("ph")===null)
    {
      navigate('../login');
    }
   
  },[])

    return (
          <LandingPageCategory/>
    )
 }

export default LandingPageTwo