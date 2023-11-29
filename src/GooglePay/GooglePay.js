import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid'
function GooglePay({orderTotalPrice,userOrders}) {

  const date = new Date()
  let CurrentDate = date.getDate()

  console.log("haii ",JSON.stringify(userOrders))
  console.log(orderTotalPrice)

  const navigate=useNavigate()
  const ProceedToPay =()=>{

    // console.log(JSON.stringify(
            
    //     {id:124,
    //    userId:localStorage.getItem("ph"),
    //     date:CurrentDate,
    //     orders:userOrders
    // }
    //  ));
    const nanoid = customAlphabet('1234567890', 10)
    const model= nanoid()
    console.log(model)
    axios.post(
        "http://localhost:3500/order_details",            
            {
            userId:localStorage.getItem("ph"),
            date:CurrentDate,
            orders:userOrders,
            amount:orderTotalPrice,
            billNo:model
            },
            {

            }
                
    ).then((response)=>{
        
       
    }).catch((error)=>{
        console.log(error);
    })      
}
  return (

    
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: `${orderTotalPrice}`,
            currencyCode: 'INR',
            countryCode: 'IN',
          },
          shippingAddressRequired:true,
          callbackIntents:['PAYMENT_AUTHORIZATION']
        }
      }
        onLoadPaymentData={paymentRequest => {
          ProceedToPay()

          navigate("../payment_sucessful")
          console.log('load payment data', paymentRequest);
        }
      }
      onPaymentAuthorized={paymentData =>{
        console.log(paymentData);
        return{
          transactionState:'SUCCESS'
        }
      }}
      existingPaymentMethodRequired='false'
      butto
      buttonSizeMode='fill'
      buttonColor='black'
      buttonType='plain'
      buttonWidth='100'
    />

  //   <GooglePayButton
  // environment="TEST"
  // paymentRequest={{
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: 'CARD',
  //       parameters: {
  //         allowedCardNetworks:['VISA','MASTERCARD'],
  //         allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  //       },
  //       tokenizationSpecification: {
  //         type: 'PAYMENT_GATEWAY',
  //         parameters: {
  //           gateway: 'example',
  //           gatewayMerchantId: 'exampleGatewayMerchantId',
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: '12345678901234567890',
  //     merchantName: 'Demo Merchant',
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: 'FINAL',
  //     totalPriceLabel: 'Total',
  //     totalPrice: '100.00',
  //     currencyCode: 'INR',
  //     countryCode: 'IN',
  //   },
  // }}
  // onLoadPaymentData={paymentRequest => {
  //   console.log('load payment data', paymentRequest);
  // }}
// />

    

    
  )
}

export default GooglePay