import React from 'react'
import { Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './OrderCommands.css'
import { Link, useHistory } from 'react-router-dom';
import {  useSelector } from 'react-redux'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { setTotalBill } from '../../redux/actions';



export default function OrderCommands() {
  const tableId = useSelector(state => state.tableId)
  const guestItemsObject = useSelector(state => state.guestItemsObject)
  const dispatch = useDispatch()
  const history = useHistory()
  
  function handleSubmit(){
  
    //put each guest from our order object into guests by table Id
    // eslint-disable-next-line array-callback-return
    Object.keys(guestItemsObject).map(seatNum => {
      Axios.post('/api/v1/guest', {
        seat: seatNum,
        TableId: tableId
        })
        .then(res => {
          // eslint-disable-next-line array-callback-return
          guestItemsObject[res.data.result.seat].map(item => {
            Axios.post('/api/v1/item', {
              name: item[0],
              cost: item[1],
              onSeat: res.data.result.seat,
              GuestId: res.data.result.id
            })
          })
        })
        .then(res => {
          dispatch(setTotalBill(0.00))
          history.push('/table')
        })
        .catch(err =>{console.log(err)})
      })
    }
  
    //put each item from our order object into items by guest id
  
  
  return (
    <Grid columns={2}>
      <Grid.Row>
      <Grid.Column style={{border:"1px solid black"}} color='blue'> 
        <Link onClick={()=> handleSubmit()}>
        <Container textAlign='center'  fluid>Send</Container>
        </Link>
        </Grid.Column>
        <Grid.Column  style={{borderTop:"1px solid black", borderRight:"1px solid black", borderBottom:"1px solid black"}}  color='green'>
        <Container textAlign='center' fluid>Pay</Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column style={{borderLeft:"1px solid black", borderRight:"1px solid black", borderBottom:"1px solid black"}} color='grey'  > 
        <Link style={{color:'white'}} to='/table'>          
        <Container textAlign='center' fluid>Cancel</Container>
        </Link>
        </Grid.Column>
        <Grid.Column style={{borderRight:"1px solid black", borderBottom:"1px solid black"}} color='red' >
        <Container  textAlign='center' fluid>Void</Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
