import React from 'react'
import PaymentPage from './paymentPageToken'
import PaymentTableDetails from './PaymentTableDetail'

export default function PaymentPageMain() {
  return (
    <div>
      <PaymentPage/>
      <div style={{ marginTop: '20px' }}>
         <PaymentTableDetails/>
         </div>
      
       
    </div>
  )
}
