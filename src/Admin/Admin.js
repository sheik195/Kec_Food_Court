import React, {Fragment, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

import './AdminPanel.css'

import TableRow from './TableRow'
import EditableRow from './EditableRow'

import BallotIcon from '@mui/icons-material/Ballot';
import {IconButton} from '@material-ui/core';
import { ExpandLess, RestaurantMenu } from '@mui/icons-material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AdminPanelSettings, BarChart } from '@mui/icons-material';

function Admin() {

    const navigate= useNavigate()

    const adminLogout=()=>{

        axios.post(
            'http://localhost:8080/logout',
            {},
            {
                headers:{
                    'Authorization':"Bearer "+localStorage.getItem('jwt')
                }
            },

        ).then(()=>{
            localStorage.setItem('jwt',"");
            navigate('../../nav/login');
        })

    }
  return (
    <div className='admin_panel_heading'>

            <div className='navigate_admin_db_left'>

               {/* <IconButton>
                    <AdminPanelSettings onClick={()=>navigate("./setting")} style={{color:"black",fontSize:"32px"}}/>
               </IconButton> */}

               

            </div>

            <p>ADMIN PANEL</p>
            <div className='navigate_admin_db_right'>

                <IconButton>
                    <RestaurantMenu onClick={()=>navigate("./dashboard")} style={{color:"black",fontSize:"32px"}}/>
                </IconButton>

               <IconButton>
                    <BallotIcon onClick={()=>navigate("./admin_db")} style={{color:"black",fontSize:"32px"}}/>
                </IconButton>

                {/* <IconButton>
                    <BarChart onClick={()=>navigate("../admin")} style={{color:"black",fontSize:"32px"}}/>
                </IconButton> */}

                <IconButton>
                    <ExitToAppIcon onClick={adminLogout} style={{color:"black",fontSize:"32px"}}/>
                </IconButton>
                
               
            </div>
            
    </div>
  )
}

export default Admin