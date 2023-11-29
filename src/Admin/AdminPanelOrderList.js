import React from 'react'
import axios from 'axios';

import './AdminPanelOrderList.css'

import AdminPanelWaitingList from './AdminPanelWaitingList';
import AdminPanelPastPayments from './AdminPanelPastPayments';

import {IconButton} from '@material-ui/core';
import {useNavigate} from "react-router-dom"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import BallotIcon from '@mui/icons-material/Ballot';
import { AdminPanelSettings, BarChart, ExpandLess } from '@mui/icons-material';



function AdminPanelOrderList() {

    var [bill,setBill]=React.useState([{}]);
    var [pastPayments,setPastPayments]=React.useState([{}]);

    // console.log(bill[2])


    React.useEffect(()=>{

         axios.get(
            'http://localhost:3500/order_details'
        ).then((response)=>{

            setBill(response.data)
            // console.log("Vanten"+JSON.stringify(response.data))
            
        }).catch((error)=>{
            console.log(error);
        })

        axios.get(
            'http://localhost:3500/past_payments'
        ).then((response)=>{

            setPastPayments(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
    

    },[])

    const readyClickFunc=(billNos,amounts,otps,id,userId)=>{
                

        axios.post(
         'http://localhost:3500/past_payments',
          {
            billNo:billNos,
            amount:amounts,
            otp:otps
          },
        ).then((response)=>{
           
            setPastPayments(response.data)
            console.log("Vanten"+JSON.stringify(response.data))
            axios.get(
                'http://localhost:3500/past_payments'
            ).then((response)=>{
    
                setPastPayments(response.data)
                
            }).catch((error)=>{
                console.log(error);
            })
         
     
        }).catch((error)=>{
            console.log(error);
        })

        
          axios.delete(
            `http://localhost:3500/order_details/${id}`
          ).then((response)=>{
           
                console.log("bill uh"+JSON.stringify(bill))
                axios.get(
                    'http://localhost:3500/order_details'
                    ).then((response)=>{
                        // console.log('response--------',response.data);
                        setBill(response.data)
                            axios.get(

                                `http://localhost:8080/orderready?email=${userId}`
                            ).then((res)=>{
                                console.log("Email sent")
                            })


                        console.log("Vanten"+JSON.stringify(response.data))
                        
                    }).catch((error)=>{
                        console.log(error);
                    })
                

           
          }).catch((error)=>{
              console.log(error);
          })

         


          
        

    }

    

  
  return (
    <div className='admin_panel_order_list'>
        

        <div className='holding_container'>

            <div className='waiting_list'>
                
                <div className='waiting_list_scroll'>
                    {bill.map((items)=>(
                        
                        <AdminPanelWaitingList 
                            items={items}
                            readyClickFunc={readyClickFunc}
                            pastPayments={pastPayments}
                            setPastPayments={setPastPayments}
                            />

                    ))}

                </div>
                
            </div>


            <div className='container_pp_amount'>


                <div className='today_payments'>
                    <div className='tp_text'>
                        <p> TODAY's PAYMENTS</p>
                    </div>

                    <table className='past_payments_table'>
                        <thead id='pp_table_heading'>
                            <td>S.NO</td>
                            <td>BILL ID</td>
                            <td>AMOUNT</td>
                            <td>OTP</td>
                        </thead>
                        <tbody>
                            {
                                pastPayments && pastPayments.length > 0 && pastPayments?.map((items,index)=>(
                                    <AdminPanelPastPayments items={items} index={index} />
                                ))
                            }
                        </tbody>
                    </table>
                   
                </div>

                {/* <div className='past_payments'>


                    <div className='pp_text'>
                        <p> PAST PAYMENTS</p>
                    </div>

                    <table className='past_payments_table'>
                        <thead id='pp_table_heading'>
                            <td>S.NO</td>
                            <td>BILL ID</td>
                            <td>AMOUNT</td>
                        </thead>
                        <tbody>
                            {
                                    pastPayments && pastPayments.length > 0 && pastPayments?.map((items,index)=>(
                                     <AdminPanelPastPayments items={items} index={index}/>
                                ))
                            }
                        </tbody>
                    </table>

                   

                </div> */}
               
            </div>

        </div>

    </div>
  )
}

export default AdminPanelOrderList