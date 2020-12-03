import React from 'react'
import {  Grid } from 'semantic-ui-react';
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
          history.push('/users/dashboard')
        })
        .catch(err =>{console.log(err)})
      })
    }
  
    //put each item from our order object into items by guest id
  
  
  return (
    <Grid columns={2}>
      <Grid.Row>
      <Grid.Column style={{border:"1px solid white",
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           fontSize: '2rem',
                           margin:'14px !important'
                           
      }} color='black'> 
      <Link onClick={()=> handleSubmit()}>
                    Send
      </Link>
        </Grid.Column>
        <Grid.Column  style={{borderTop:"1px solid white", 
                              borderRight:"1px solid black", 
                              borderBottom:"1px solid white",
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '2rem'
                              
                              }}  color='black'>
                          Pay
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column style={{borderLeft:"1px solid white", 
                             borderRight:"1px solid white", 
                             display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             fontSize: '2rem'
                            }} color='black'  > 
        <Link style={{color:'white'}} to='/users/table'>          
        Cancel
        </Link>
        </Grid.Column>
        <Grid.Column style={{ borderBottom:"1px solid black",
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '2rem'
      
      }} color='black' >
                Void
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
