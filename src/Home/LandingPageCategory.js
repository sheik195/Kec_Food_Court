import React,{Link} from 'react';
import './LandingPageCategory.css';
import food_item from '../Assets/category_fooditems.jpg';
import snacks from '../Assets/category_snacks.jpg';
import juice from '../Assets/category_juice.jpg';
import {useNavigate} from "react-router-dom"


function LandingPageCategory() {

  const navigate = useNavigate();

  return (
    <div className='Landing_Page_Category'>

        <div className='containers'>
            <img 
              id='image' 
              onClick={()=>navigate('../fooditems')}
              src={food_item}/>
            <br></br>
            <br></br>
            <p id='name' onClick={()=>navigate('../fooditems')} > <span id='white'>FOOD</span> <span id='yellow'>ITEMS</span></p>
        </div>

        <div className='containers '>
            <img id='image' onClick={()=>navigate('../chatitems')} src={snacks}/>
            <br></br>
            <br></br>
            <p id='name' onClick={()=>navigate('../chatitems')}> <span id='white'>CHAT</span> <span id='yellow'>SNACKS</span></p>        
        </div>

        <div className='containers'>
            <img id='image' onClick={()=>navigate('../chatitems')} src={juice}/>
            <br></br>
            <br></br>
            <p id='name' onClick={()=>navigate('../chatitems')}> <span id='white'>JUICES</span> <span id='yellow'>MILKSHAKES</span></p>        
        </div>

    </div>
  )
}

export default LandingPageCategory