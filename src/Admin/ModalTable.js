import React from 'react'
import { ModalFooter } from 'react-bootstrap'
import ModalTableContents from './ModalTableContents'

export const ModalTable = ({userOrder,price,amount,setAmount}) => {
  
  const [row,setRow]=React.useState(userOrder)
  // setRow(userOrder)
  console.log("Modal Table "+JSON.stringify(row))
  // console.log("price----",amount) 

  
  
  return (

      row && row.length > 0 && row?.map((item )=>(
      <ModalTableContents 
      item={item} 
      price={price}
      amount={amount}
      setAmount={setAmount}/>
    ))
    
     
  )
}