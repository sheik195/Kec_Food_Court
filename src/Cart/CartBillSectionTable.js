import React from 'react';
import './CartBillSection.css';


const CartBillSectionTable =({setJelloAnim,item,setOrder,orders})=> {

    console.log(JSON.stringify(item))
    // const [getId,setGetId] = useState(null);
    const [jello,setJello] = React.useState(0);

    const setJelloAnimation = ()=>{

        setJelloAnim(1);
    }

    const removeChange =(item,obj)=>{
    
        const index=item.findIndex((e)=>e.dishName===obj.dishName)
        
        if(index===-1)
        {
            item.splice(index,1);
        }
        else
        {
            item.splice(index,1);
        }
        setOrder(orders)
        const oo= localStorage.setItem("user_order",JSON.stringify(orders))
      
        console.log("Vanten"+JSON.stringify(item))
        
     }
    

  return (
    
        <tr >
            <td>{item.dishName}</td>
            <td>{item.price}</td>
            <td>{item.count}</td>
            <td>{item.price*item.count}</td>
            <td>
                <button 
                    id='button__remove'
                    type='button' 
                    onClick={()=>removeChange(orders,item)}
                    onClickCapture={setJelloAnimation}
                    >
                    REMOVE
                </button>
            </td>
        </tr>
                        
  )
}

export default CartBillSectionTable