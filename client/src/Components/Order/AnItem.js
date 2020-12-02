import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalBill } from '../../redux/actions'

import './Guest.css'

export default function AnItem(props) {
  const dispatch = useDispatch()
  const totalBill = useSelector(state=>state.totalBill)
  
  useEffect(()=>{
    dispatch(setTotalBill(totalBill + props.price))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.price, dispatch])


  return (
    <div className='guest'>
    <Grid divided style={{fontSize:'12px'}}>
    <Grid.Column width={8}  style={{fontSize:'12px'}}>
      {props.shorthand}
    </Grid.Column>
    <Grid.Column width={8} style={{fontSize:'12px', textAlign:'right'}}>
      {props.price}
    </Grid.Column>
  </Grid>
    </div>
  )
}
