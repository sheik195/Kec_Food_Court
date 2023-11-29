import React,{Link} from 'react';
//css
import './LandingPage.css';
//images
import burger from '../Assets/home_burger.gif';
import {useNavigate} from "react-router-dom"
// import biriyani from './Assets/home_Biriyani_1.jpg';


function LandingPage() {

  const navigate = useNavigate();

  return (

    <div className='LandingPage_container'>

        <div className='kec_fc'>

            <p id='heading'>KEC <span>FOOD</span>COURT</p>
            <p id='tagline_one'>Wake up your Taste Buds</p>
            
            <button onClick={()=>{
              if(localStorage.getItem("ph")!=null)
              {navigate("../ordernow")}
              else{
                navigate("/nav/login")
              }
            }} id='order_now_button'>ORDER NOW</button>
            
            <p id='tagline_two'><span>SIT</span>BACK | <span>RELAX</span> | EN<span>JOY</span></p>
            
        </div>


        <div className='burger_image'>
          <img id='landing_page_image_1' src={burger}></img>
        </div>

        {/* <div className='biriyani_image'>
          <img src={biriyani}></img>
        </div> */}


      
    </div>
  )
}

export default LandingPage
