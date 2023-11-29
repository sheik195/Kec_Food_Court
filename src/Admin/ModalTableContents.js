import React from 'react'

function ModalTableContents({item,amount,setAmount}) {


    const ap=amount
    const prices =ap+item.price*item.count
    // setAmount(prices)

    // console.log("hey",JSON.stringify(item))


  return (
     <tr id='modal_table_row'>
        <td>{item.dishName}</td>
        <td>{item.count}</td>
        <td>{item.price}</td>

    </tr>
  )
}

export default ModalTableContents