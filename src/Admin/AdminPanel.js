import React, {Fragment, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

import './AdminPanel.css'

import TableRow from './TableRow'
import EditableRow from './EditableRow'

import BallotIcon from '@mui/icons-material/Ballot';
import {IconButton} from '@material-ui/core';
import { ExpandLess } from '@mui/icons-material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AdminPanelSettings, BarChart } from '@mui/icons-material';



function AdminPanel() {

    const navigate=useNavigate()
    const handleLogOut=()=>{

        axios.post(
            'http://localhost:8080/logout',
            {
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('jwt')
                }
            }
        ).then(
            ()=>{
                console.log('logged out')
                localStorage.setItem('jwt',"");
                navigate('../nav/home');
            }
        )
    }

    useEffect(()=>{
        axios.get(
            'http://localhost:8080/every'
            // 'http://localhost:3500/books'
        ).then((response)=>{
            console.log('response----',response.data);
            setFoodItems(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
        
    },[])

    const [foodItems, setFoodItems] = useState([{}]);
 
    const [dishName,setDishName]=useState('');
    const [dishCategory,setDishCategory]=useState('');
    const [dishPrice,setPrice]=useState(null);
    const [dishImageUrl,setDishImageUrl]=useState('');

    const [editFoodItems,setEditFoodItems] = useState({
            "dishName":'',
            "price":parseInt(''),
            "category":'',
            "availability":true,
            "imageUrl":''   
    });

    const [editClick,setEditClick] = useState(null);

    const handleAddFoodItemsSubmit = (event) =>{


        axios.post(
            'http://localhost:8080/save',
            JSON.stringify({
                "id":foodItems.id,
                "dishName":dishName,
                "price":parseInt(dishPrice),
                "category":dishCategory,
                "imageUrl":dishImageUrl
            }),
            {
                headers:{
                    'Content-Type':'application/json'
                    
                }
            }
        ).then((response)=>{
            
            console.log(response.data);
            
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleEditClickChange =(event,foodItems) => {
        event.preventDefault();
        setEditClick(foodItems.id);

        const new_field = {

            "id": foodItems.key,
            "dishName":foodItems.dishName,
            "price":foodItems.price,
            "availability":foodItems.availability,
            "category":foodItems.category,
            "imageUrl":foodItems.imageUrl
            
        };

        setEditFoodItems(new_field);

        axios.post(
             'http://localhost:8080/modify',
            //'http://localhost:3500/books',
            JSON.stringify({
                "id": foodItems.key,
                "dishName":foodItems.dishName,
                "price":foodItems.price,
                "availability":foodItems.availability,
                "category":foodItems.category,
                "imageUrl":foodItems.imageUrl
            }),
            {
                // headers:{
                //     'Content-Type':'application/json'
                    
                // }
            }
        ).then((response)=>{
            
            console.log(response.data);
            
        }).catch((error)=>{
            console.log(error);
        })
    



    };

    const handleCancelClickChange = () => {
        setEditClick(null);
    };

    const handleRemoveClickChange = (id) => {

        const new_Array = [...foodItems];
        const index = foodItems.findIndex((foodItems) => foodItems.id === id);

    
        
        axios.post(
            `http://localhost:8080/delete?id=${id}`,
            
            
        ).then((response)=>{
            console.log(response.data);
            new_Array.splice(index, 1);
            setFoodItems(new_Array);
            
        }).catch((error)=>{
            console.log(error);
        })
        
       
    };


    
  return (
    <div className='Admin_Panel'>
        
        <div id='top'></div>

        <br></br>
        <br></br>


        <form onSubmit={handleAddFoodItemsSubmit} className='form_addfield'>
            <input 
                id='input_field'
                type='text'
                name='dishName'
                placeholder='ENTER DISHNAME'   
                value={dishName}        
                onChange={(e)=>{setDishName(e.target.value)}}
                required
                
            />
             <input 
                id='input_field'
                type='text'
                name='price'
                placeholder='ENTER PRICE'
                onChange={(e)=>{setPrice(e.target.value)}}
                value={dishPrice}
                required
            />
            <select
                 id='input_field'
                 name='category'
                 onChange={(e)=>{setDishCategory(e.target.value)}}
                 value={dishCategory}
                 placeholder='CATEGORY'
                 required
                 >
                <option value='' hidden>CATEGORY</option>
                <option>PAROTTA</option>
                <option>BREAKFAST</option>
                <option>NOODLES</option>
                <option>FRIED RICE</option>
                <option>BIRIYANI</option>
                <option>NAAN</option>
                <option>EGG</option>
                <option>GRAVY</option>

            </select>
   

             <input 
                id='input_field'
                type='text'
                name='imageUrl'
                placeholder='ENTER IMAGE URL'
                onChange={(e)=>{setDishImageUrl(e.target.value)}}
                value={dishImageUrl}
                required
            />
          
            <button type='submit' id='button__add'>ADD</button>
            <br></br>
        </form>

        <br></br>
        <br></br>

        <div className='button_top'>
            <IconButton href='#top'>
                <ExpandLess style={{backgroundColor:'black',color:'white',padding:'10px',fontSize:'24px',borderRadius:'50%',position:'fixed',bottom:'20px',right:'20px'}}/>
            </IconButton>
        </div> 


        <table  className='admin_table'>

            <thead className ='admin_table_head'>
                <tr>
                <td id='admin_table_head'>S.NO</td>
                <td id='admin_table_head'>NAME</td>
                <td id='admin_table_head'>PRICE</td>
                <td id='admin_table_head'>CATEGORY</td>
                {/* <td id='admin_table_head'>AVAILABLE</td> */}
                <td id='admin_table_head'>IMAGE URL</td>
                <td id='admin_table_head_action'>ACTIONS</td>
                </tr>
            </thead>

            <tbody>
                
                {foodItems.map((items,index)=>(
                    <Fragment>

                        {editClick === items.id ?
                            (<EditableRow 
                                items={items} 
                                index={index}
                                handleCancelClickChange={handleCancelClickChange}
                                setEditClick={setEditClick}/>
                            ) :
                            (<TableRow 
                                items={items}
                                index={index}
                                handleEditClickChange={handleEditClickChange}
                                handleRemoveClickChange={handleRemoveClickChange}
                                />
                            )
                        }
                           
                    </Fragment>


                ))}

            </tbody>
            
        </table>

    </div>
  )
}

export default AdminPanel;