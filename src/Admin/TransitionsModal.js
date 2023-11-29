import React,{useState} from 'react';

import axios from 'axios';
import { ModalTable } from './ModalTable';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:5,
};

function TransitionsModal({items,price,amount,setAmount}) {

// console.log("two "+JSON.stringify(items))
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [orderTable,setOrderTable]= useState(items)
  
  return (
    <div className='modal'>
      <Button onClick={handleOpen}>SEE ORDERS</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <div className='modal_table'>
            <table>
              <thead id='modal_table_heading'>
                <td >DISH</td>
                <td>COUNT</td>
                <td>PRICE</td>
              </thead>
              <tbody>
                { 
                // console.log("hello   ",orderTable.orders)                
                     <ModalTable 
                     userOrder={orderTable.orders} 
                     price={price}
                     amount={amount}
                     setAmount={setAmount}/>
                }
              </tbody>
            </table>
            </div>
            
            
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal