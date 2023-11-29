import React ,{useEffect} from 'react';
import ChatItemsPriceCard from '../PriceCard/PriceCard';
import './FoodItemsCategories.css';

import axios from 'axios';

const FoodItemsDisplay = ({item_cate,order,setOrder}) =>{

    // const ss='JUICE' ;
    useEffect(()=>{
      axios.get(
          `http://localhost:8080/fetch?category=${item_cate}`
      ).then((response)=>{
          console.log('response----',response.data);
          setFoodItemsCategory(response.data)
          
      }).catch((error)=>{
          console.log(error);
      })
      
  },[])
    


  const [foodItemsCategory,setFoodItemsCategory]=React.useState([{}]);
  return (
    <>
    <p className='category_name' id={`${item_cate}`}>{item_cate}</p>
    <div className='food_display'>
      
       {foodItemsCategory.map((items)=>(
                  
          <ChatItemsPriceCard items={items} order={order} setOrder={setOrder} />
                          
          ))
       }

        
      
    </div>
    </>
  )
}

export default FoodItemsDisplay
