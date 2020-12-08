import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalBill } from '../../redux/actions'
import './AnItem.css'
import { removeItem, addTotalBill, reduceTotalBill } from '../../redux/actions'
import './Guest.css'


export default function AnItem({shorthand, price, item, index, guest}) {
  const dispatch = useDispatch()
  const totalBill = useSelector(state=>state.totalBill)
  const manager = useSelector(state=>state.userSignin.userInfo.manager)

  
  useEffect(()=>{
    dispatch(addTotalBill(parseFloat(price)))
  
  },[ dispatch, price])

  const deleteItem = () =>{
    if(item.length < 3 || manager){
    dispatch(reduceTotalBill(price))
    dispatch(removeItem(index, guest, item[2] || null))
  }else{
    alert('You need a manager to remove this item!')
    }
  }


  return (
    <div className='guest'>
    <Grid divided style={{fontSize:'12px'}}>
    <Grid.Column width={8}  style={{fontSize:'12px'}}>
      {shorthand}
    </Grid.Column>
    <Grid.Column width={8} style={{fontSize:'12px', textAlign:'right'}}>
      {price}

    <button className='deleteButton' onClick={deleteItem}>DELETE</button>

    </Grid.Column>
  </Grid>
    </div>
  )
}
