import React, { useState } from 'react';
import axios from 'axios';
import './EditableRow.css';

const EditableRow = ({items,index,handleCancelClickChange,setEditClick}) => {

    const [dishEditName,setDishEditName]=useState (items.dishName);
    const [dishEditCategory,setDishEditCategory]=useState(items.category);
    const [dishEditPrice,setEditPrice]=useState(items.price);
    const [dishEditAvailability,setDishEditAvailability]=useState(items.availability);
    const [dishEditImageUrl,setDishEditImageUrl]=useState(items.image_url);
    
    const handleEditFormSubmit = ()=>{

        
        axios.post(
            'http://localhost:8080/modify',
            JSON.stringify({
                "id":items.id,
                "dishName":dishEditName,
                "imageUrl":dishEditImageUrl,
                "category":dishEditCategory,
                "price":parseInt(dishEditPrice),
                "availability":dishEditAvailability,
                
                
            }),
            {
                headers:{
                    'Content-Type':'application/json'
                    
                }
            }
        ).then((response)=>{
            console.log(response.data);
            setEditClick(null);
            
        }).catch((error)=>{
            console.log(error);
        })
    }
  
  return (

        <tr id='edit_admin_table_row'>
            <td id='edit_admin_table_cell' className='index_table'>{index+1}</td>

            <td id='edit_admin_table_cell'>

                <input 
                    type='text'
                    name='dishName'
                    placeholder='Enter name'   
                    value={dishEditName}        
                    onChange={(e)=>{setDishEditName(e.target.value)}}
                />

            </td>

            <td id='edit_admin_table_cell'>

                <input 
                    type='text'
                    name='price'
                    placeholder='Enter price'
                    value={dishEditPrice}        
                    onChange={(e)=>{setEditPrice(e.target.value)}}
                />

            </td >

            

            <td id='edit_admin_table_cell'>

            <select
                 id='input_field'
                 className='select_edit'
                 type='text'
                 name='category'
                 placeholder='Enter category'
                 value={dishEditCategory}        
                 onChange={(e)=>{setDishEditCategory(e.target.value)}}
                >
                <option>PAROTTA</option>
                <option>BREAKFAST</option>
                <option>NOODLES</option>
                <option>FRIED RICE</option>
                <option>BIRIYANI</option>
                <option>NAAN</option>
                <option>EGG</option>
                <option>GRAVY</option>
            </select>


            </td>

            {/* <td id='admin_table_cell'>
                    <input 
                        id='input_field'
                        type='checkbox'
                        name='availability'
                        checked={dishEditAvailability}
                    />
                    
            </td> */}

            <td id='edit_admin_table_cell'>

                <input 
                    type='text'
                    name='image_url'
                    placeholder='PASTE URL'
                    value={dishEditImageUrl}        
                    onChange={(e)=>{setDishEditImageUrl(e.target.value)}}                />

            </td>

            <td id='edit_admin_table_cell'>
                    <button 
                        type='submit'
                        id='button_save'
                        onClick={()=>{handleEditFormSubmit()}}>
                        SAVE
                        
                    </button>
                    <button 
                        type='button'
                        id='button_cancel'
                        onClick={handleCancelClickChange}>
                        CANCEL
                    </button>
            </td>
        </tr> 
    
  )
}

export default EditableRow