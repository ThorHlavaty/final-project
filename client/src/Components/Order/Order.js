import React, { useEffect } from 'react'
import menuData from '../../data'
import Menu from './Menu'
import OrderCommands from './OrderCommands'
import Guests from './Guests'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { setAccordionIndex, setCurrentGuest, setGuestCount, setGuestItemsObject, setTableId, setTableNum } from '../../redux/actions'
import 'semantic-ui-css/semantic.min.css';
import './Order.css'
import OrderHeader from './OrderHeader'
import OrderHeaderMobile from './OrderHeaderMobile'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

const content = {
    backgroundColor: '#74bff8',
    height: '100vh',
    border: '1px solid #000 !important',
    overflow: 'auto',
    marginLeft: '0px', 
  }

  //Keys seat# of each guestId at this table.
  //Values an array that has each item that matches the guest id's price and name as an array



export default function Order() {
const dispatch = useDispatch()
const tableId = useSelector(state => state.tableId)
const { id } = useParams()


useEffect(()=>{
  dispatch(setAccordionIndex(-1))
  dispatch(setTableId(id))
  dispatch(setGuestCount(1))
  dispatch(setCurrentGuest(1))
  Axios.get(`/api/v1/table/${tableId}`)
  .then(res => {
    dispatch(setTableNum(res.data.number))
    let currentOrder = {0:[]}
    res.data.Guests.forEach(order => {
      currentOrder[order.seat] = order.Items.map(item =>[item.name, item.cost])
    })
    dispatch(setGuestItemsObject(currentOrder))
    let seatNum = res.data.Guests.reduce((prev, curr, i)=> (curr.seat > prev ? curr.seat : prev), 1)
    dispatch(setGuestCount(seatNum))
  })
},[dispatch, tableId, id])
  
  return (
    <>
    <div className="OrderRoot">
    <Grid style={{paddingBottom:'0rem', }}>
    <Grid.Row only='computer tablet' style={{paddingBottom:'0px', paddingTop:'0px'}}>
    <OrderHeader />
    </Grid.Row>
    <Grid.Row only='mobile' style={{paddingBottom:'0px', paddingTop:'0px'}}>
    <OrderHeaderMobile />
    </Grid.Row>
    </Grid>
    <Grid stretched columns={2}>
      <Grid.Column color='white' style={{paddingLeft:'1rem', paddingRight:'1rem', paddingBottom:'1rem'}}>
        <Guests />
        <OrderCommands />
      </Grid.Column>
      <Grid.Column style={content} >
        {Object.keys(menuData).map((title, index) =>{
          return <Menu key={index} index={index} title={title}/>
        })}
      </Grid.Column>
    </Grid>
    </div>
    </>
  ) 
}
