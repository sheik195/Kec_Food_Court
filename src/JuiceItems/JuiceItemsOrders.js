import React from 'react'
import PriceCard from '../PriceCard/PriceCard';
import axios from 'axios';
import './JuiceItemsOrders.css'

function JuiceItemsOrders({order,setOrder}) {
  
        const [foodItems, setFoodItems] = React.useState([{}]);
   

   React.useEffect((event)=>{
    //  event.preventDefault();
       axios.get(
           'http://localhost:8080/fetch?category=JUICE'
       ).then((response)=>{
           console.log('response----',response.data);
           setFoodItems(response.data)
           
       }).catch((error)=>{
           console.log(error);
       })
       
   },[])


//   console.log('----',foodItems)  
 


   


 return (
   <div className='Juice_Items_Orders' >
   
           {foodItems.map((items)=>(

               <PriceCard 
                   items={items}
                   order={order} setOrder={setOrder}

               />

           ))}

   </div>
 )
}
    


export default JuiceItemsOrders