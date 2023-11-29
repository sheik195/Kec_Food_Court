import React,{Outlet ,Link} from 'react';
import './Navbar.css';
import {useNavigate} from "react-router-dom"


//material ui
import {IconButton} from '@material-ui/core';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import DeckIcon from '@mui/icons-material/Deck';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//rect icons
import {FaHome} from 'react-icons/fa';
import {RiHotelLine} from 'react-icons/ri';
import LogoutIcon from '@mui/icons-material/Logout';

//images
import logo from './Assets/logo.jpg';


function Navbar() {

    const navigate = useNavigate();

    const logOutFunction =()=>{

        localStorage.removeItem("ph")
        localStorage.removeItem("user_order")
        navigate('./home')
    }

    const logInFunction =()=>{
        if(localStorage.getItem('ph')===null)
        {
            navigate("./login")
        }
        else{

            navigate("./ordernow")
        }
    }

    const disabledFunction =()=>{

        if(localStorage.getItem('ph')!==null)
        {
            return true
        }

        else{
            return false
        }

    }

    // const logOutDisable = ()=>{
    //     if(localStorage.getItem('ph')===null)
    //     {
    //         return false
    //     }

    //     else{
    //         return true
    //     }    
    // }

  return (
        <div className='navigation_bar'>

            {/* <div className='logo_fc'>
                <img src={logo} alt='logo'/>
            </div>  */}

            <div className='menu_container'>

                
                    <div className='menu_item'>
                    {/* <Link to='../home'> */}
                    
                        <IconButton > 
                                <FaHome onClick={()=>navigate("./home")}
                                style={{color:"yellows",fontSize:"32px"}}/> 
                        </IconButton>
                        {/* </Link> */}
                    </div>
                
                
                {/* <Link to='/home'> */}
                    <div className='menu_item'>
                        <IconButton onClick={()=>navigate("./fooditems")}> 
                            <RamenDiningIcon style={{color:"yellow",fontSize:"32px"}}/>
                        </IconButton>
                    </div>
                {/* </Link> */}
                
                {/* <Link to='/home'> */}
                    <div className='menu_item'>
                        <IconButton onClick={()=>navigate("./chatitems")}> 
                            <DeckIcon style={{color:"yellow",fontSize:"32px"}}/>
                        </IconButton>
                    </div>
                {/* </Link> */}
                

                {/* <Link to='/home'> */}
                    <div className='menu_item'>
                        <IconButton onClick={()=>navigate("./juiceitems")}  > 
                            <LocalBarIcon style={{color:"yellow",fontSize:"32px"}}/>
                        </IconButton>
                    </div>
                {/* </Link> */}

                {/* <Link to='/home'> */}
                    <div className='menu_item'>
                        <IconButton onClick={()=>navigate("./cart")} > 
                            <ShoppingCartIcon style={{color:"yellow",fontSize:"32px"}}/>
                        </IconButton>
                    </div>
                {/* </Link> */}
   
            </div>

            {/* <Link to='/home'> */}
                <div className='container_log'>
                    <div className='logIn'>
                        <IconButton  onClick={logInFunction} >
                            <RiHotelLine id='login_button_' style={{color : localStorage.getItem('ph')!==null ? 'green' : 'grey' ,fontSize:"34px"}}/>   
                        </IconButton>
                        
                    </div>
                    
                    <div className='logOut'>
                        <IconButton onClick={logOutFunction}  >
                            <LogoutIcon style={{color:"grey",fontSize:"34px"}}/>   
                        </IconButton>

                    </div>
                    
                    
                    
                </div>
            {/* </Link> */}


            

            
        </div>
  )
}

export default Navbar