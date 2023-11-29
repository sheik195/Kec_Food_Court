import React from 'react'

const AdminPanelPastPayments=({items,index})=> {
  return (
    <tr id='pp_table_row'>
        <td>{index+1}</td>
        <td>{items.billNo}</td>
        <td>{items.amount}</td>  
        <td>{items.otp}</td>        
      

    </tr>
  )
}

export default AdminPanelPastPayments