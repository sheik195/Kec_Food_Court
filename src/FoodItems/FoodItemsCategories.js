import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './FoodItemsCategories.css';

import FoodItemsDisplay from './FoodItemsDisplay';


function FoodItemsCategories({order,setOrder}) {

  const [foodItems, setFoodItems] = React.useState([{}]);

  // useEffect(()=>{
  //   axios.get(
  //       'http://localhost:3500/food_items'
  //   ).then((response)=>{
  //       console.log('response----',response.data);
  //       setFoodItems(response.data)
        
  //   }).catch((error)=>{
  //       console.log(error);
  //   })
    
  // },[])


  const categoryArray=['PAROTTA','BREAKFAST','NOODLES','FRIED RICE','BIRIYANI','NAAN','EGG','GRAVY'];

  // foodItems.map((items)=>(
  //     categoryArray.includes(items.category) ? categoryArray :  categoryArray.push(items.category)
  // ))
 

  return (
  
    <div className='Food_Items_Categories'>


        <div className='category_list'>

          <div className='category_list_scroll'>

            {categoryArray.map((items)=>(

                <p>{items}</p>
            ))}

          </div>
            
        </div>

        <div className='menu_list'>
          {categoryArray.map((item_cate)=>(
                <div className='menu_list_display'>
                             
                  <FoodItemsDisplay item_cate={item_cate} order={order} setOrder={setOrder}/>   
                 </div>            

            ))
          }
        </div>
    
</div>     
  )
}

export default FoodItemsCategories
