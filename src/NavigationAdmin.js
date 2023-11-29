import React from 'react'
import AdminPanel from './Admin/AdminPanel';
import {Routes,Route} from 'react-router-dom';
import AdminPanelOrderList from './Admin/AdminPanelOrderList';
import { AdminPanelSettings } from '@mui/icons-material';
import AdminPanelSetting from './Admin/AdminPanelSetting';
import Admin from './Admin/Admin';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NavigationAdmin() {
  const navigate=useNavigate();
  useEffect(
    ()=>{
      if(localStorage.getItem('jwt')==="")
      {
        navigate('../../nav/login')
      }
    },[]
  )
  return (
    <div className='navigation_holder'>
      <Admin/>
      <Routes>

          <Route path='/dashboard' element={<AdminPanel/>}/>
          <Route path='/admin_db' element={<AdminPanelOrderList/>}/>
          <Route path='/setting' element={<AdminPanelSetting/>}/>

          
      </Routes>
    </div>
  )
}

export default NavigationAdmin