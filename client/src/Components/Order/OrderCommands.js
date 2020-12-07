import React from 'react'
import {  Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './OrderCommands.css'
import { Link, useHistory } from 'react-router-dom';
import {  useSelector } from 'react-redux'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { setGuestItemsObject, setTotalBill } from '../../redux/actions';



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
          guestItemsObject[res.data.seat].map(item => {
            if(item.length < 3){
            Axios.post('/api/v1/item', {
              name: item[0],
              cost: item[1],
              onSeat: res.data.seat,
              GuestId: res.data.id
            })}
          })
        })
        .then(res => {
          dispatch(setTotalBill(0.00))
          history.push('/users/mobile/board')
        })
        .catch(err =>{console.log(err)})
      })
    }

    const handlePay =() => {
      Axios.delete(`/api/v1/table/${tableId}`)
      .then(res => {dispatch(setTotalBill(0.00))
      dispatch(setGuestItemsObject({}))
      history.push('/users/mobile/board')
      })
      .catch(err => console.log(err))
    }

  
  
  
  return (
    <Grid cl columns={2}>
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
                              fontSize: '2rem',
                              color: 'green',
                              backgroundColor: '#000 !important'
                              
                              }}  color='black'>
                          <Link style={{color: 'green'}} onClick={handlePay}>
                            Pay
                          </Link>
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
        <Link style={{color:'white'}} to='/users/mobile/board'>          
        Cancel
        </Link>
        </Grid.Column>
        <Grid.Column style={{ borderBottom:"1px solid black",
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '2rem',
                              color: 'red'
      
      }} color='black' >
                Void
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
