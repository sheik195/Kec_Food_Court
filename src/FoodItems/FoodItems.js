import React from 'react'
import './FoodItems.css';
import FoodItemsCategories from './FoodItemsCategories';


function FoodItems({order,setOrder}) {

  return (
    

        <FoodItemsCategories order={order} setOrder={setOrder}/>
        
    
  )
}

export default FoodItems