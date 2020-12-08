import React from 'react'
import {  useSelector } from 'react-redux'
import './CheckTotal.css'

export default function CheckTotal() {
  const totalBill = useSelector(state => state.totalBill)
  
  return (
    <div>
      <p>total: ${totalBill.toFixed(2)}</p>
      <p>tax: ${(totalBill * 0.07).toFixed(2)}</p>
      <p className='total'>Grand Total: ${(totalBill * 1.07).toFixed(2)}</p>
    </div>
  )
}
