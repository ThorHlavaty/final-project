import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, addTotalBill, reduceTotalBill } from '../../redux/actions'


import './Guest.css'

export default function AnItem({shorthand, price, item, index, guest}) {
  const dispatch = useDispatch()
  const totalBill = useSelector(state=>state.totalBill)
  
  
  useEffect(()=>{
    dispatch(addTotalBill(parseFloat(price)))
  
  },[ dispatch, price])

  const deleteItem = () =>{
    
    dispatch(reduceTotalBill(price))
    dispatch(removeItem(index, guest, item[2] || null))
  }


  return (
    <div className='guest'>
    <Grid divided style={{fontSize:'12px'}}>
    <Grid.Column width={8}  style={{fontSize:'12px'}}>
      {shorthand}
    </Grid.Column>
    <Grid.Column width={8} style={{fontSize:'12px', textAlign:'right'}}>
      {price}
    <button onClick={deleteItem}>x</button>
    </Grid.Column>
  </Grid>
    </div>
  )
}
