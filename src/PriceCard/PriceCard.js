import React from 'react'
import axios from 'axios';

const PriceCard = ({items,order,setOrder})=> {

    // const [getId,setGetId] =React.useState(null);
    const [count,setCount] = React.useState(0);
    // const [userOrders,setUserOrders] = React.useState([{}]);


    const increaseCount = ()=>{

        // if(localStorage.getItem('ph'))
        // {

        // }

        
        setCount(prevCount => prevCount+1);
    }

  const decreaseCount = ()=>{

    setCount(prevCount => prevCount>0 ? prevCount-1 : 0);
  }

  const addToCart =(order,obj)=>{
    
    const index=order.findIndex((e)=>e.dishName===obj.dishName)
    
    if(index===-1)
    {
        order.push(obj)
    }
    else
    {
        order[index]=obj
    }
    setOrder(order)
    localStorage.setItem("user_order",JSON.stringify(order))
    console.log("Vanten"+JSON.stringify(order))

 }

 const addToCartFunc =()=>{


    addToCart(order,{"dishName":items.dishName,"count":count,"price":items.price})


 }

    
  return (
    <div className='card' >

                    <div className='image_section'>
                        <img src={items.imageUrl} className='image_dish'/>
                    </div>

                    <div className='holder_section'>
                        <div className='section_one'>

                                <div className='section_one_one'>
                                    <p id='dish_name'>{items.dishName}</p>
                                </div>
                                
                                <div className='section_one_two'>
                                    <button  onClick={decreaseCount} id='button_count'>-</button>
                                    <p id='count'>{count}</p>
                                    <button onClick={increaseCount} id='button_count'>+</button>
                                </div>

                                
                                    
                        </div>

                        <div className='section_two'>

                            <div className='section_two_one'>
                                <p ><span id='dolar_symbol'>$.</span><span id='price'>{items.price}</span></p>
                            </div>
                            
                                <button id='button_add' 
                                disabled={count<=0 || localStorage.getItem('ph')===null ? true : false}
                                onClick={addToCartFunc} >
                                    ADD
                                </button>          
                            
                        </div>  
                    </div>

                   
    </div>
  )
}

export default PriceCard