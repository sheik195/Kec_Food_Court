import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import './ChatItemsOrders.css'
import ChatItemsPriceCard from '../PriceCard/PriceCard';


function ChatItemsOrders({order,setOrder}) {

    const [foodItems, setFoodItems] = useState([{}]);
   

    useEffect((event)=>{
        // event.preventDefault();
        axios.get(
            'http://localhost:8080/fetch?category=SNACKS'
        ).then((response)=>{
            console.log('response----',response.data);
            setFoodItems(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
        
    },[])

 
//   console.log('----',foodItems)  
  


    


  return (
    <div className='Chat_Items_Orders' >
    
            {foodItems.map((items)=>(

                <ChatItemsPriceCard 
                    items={items}
                    order={order} 
                    setOrder={setOrder}

                />

            ))}

    </div>
  )
}

export default ChatItemsOrders