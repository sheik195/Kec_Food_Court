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


function AdminPanelSetting() {

  const navigate= useNavigate()  
  return (
    <div className='Admin_setting'>

    
        <div className='login_setting'>

          <form onSubmit='' >

            <p> LOG IN SETTINGS</p>

            <label>User Id
              <input 
                  id='input_field'
                  type='text'
                  name='dishName'
                  placeholder='ENTER DISHNAME'   
                  // value={dishName}        
                  // onChange={(e)=>{setDishName(e.target.value)}}
                  
              />
              </label>
            
              <label>Password
              <input 
                  id='input_field'
                  type='Password'
                  name='dishName'
                  placeholder='ENTER DISHNAME'   
                  // value={dishName}        
                  // onChange={(e)=>{setDishName(e.target.value)}}
                  
              />
              </label>
             
              <button type='submit' id='button__add'>ADD</button>
              <br></br>
          </form>

        </div>
        <div className='payment_settings'>

            <p>GPAY SETTINGS</p>
            <form  onSubmit=''>

            </form>

        </div>
    </div>
  )
}

export default AdminPanelSetting