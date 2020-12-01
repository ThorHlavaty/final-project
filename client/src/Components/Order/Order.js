import React, { useEffect } from 'react'
import menuData from '../../data'
import Menu from './Menu'
import OrderCommands from './OrderCommands'
import Guests from './Guests'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { setAccordionIndex } from '../../redux/actions'
import 'semantic-ui-css/semantic.min.css';
import './Order.css'
import OrderHeader from './OrderHeader'
import OrderHeaderMobile from './OrderHeaderMobile'
import Axios from 'axios'
import { compareSync } from 'bcrypt'

const content = {
    backgroundColor: '#C0E9ED',
    height: '95vh',
    border: '1px solid #ccc',
    overflow: 'auto',
    marginLeft: '0px', 
  }

  //Keys seat# of each guestId at this table.
  //Values an array that has each item that matches the guest id's price and name as an array



export default function Order() {
const dispatch = useDispatch()
const tableId = useSelector(state => state.tableId)

useEffect(()=>{
  dispatch(setAccordionIndex(-1))
  // Axios.get(`/api/v1/guest/${tableId}`)
  // .then(res => {res.data.map(guest => {
  //   Axios.get(`/api/v1/item/${guest.id}`)
  //   .then(res => {console.log(res)})
  // })})
},[dispatch])
  
  return (
    <>
    <Grid style={{paddingBottom:'0rem'}}>
    <Grid.Row only='computer tablet' style={{paddingBottom:'0px', paddingTop:'0px'}}>
    <OrderHeader />
    </Grid.Row>
    <Grid.Row only='mobile' style={{paddingBottom:'0px', paddingTop:'0px'}}>
    <OrderHeaderMobile />
    </Grid.Row>
    </Grid>
    <Grid stretched columns={2}>
      <Grid.Column color='purple' style={{paddingLeft:'1rem', paddingRight:'1rem', paddingBottom:'1rem'}}>
        <Guests />
        <OrderCommands />
      </Grid.Column>
      <Grid.Column style={content} >
        {Object.keys(menuData).map((title, index) =>{
          return <Menu key={index} index={index} title={title}/>
        })}
      </Grid.Column>
    </Grid>
    </>
  ) 
}
