import React, { useEffect } from 'react'
import menuData from '../../data'
import Menu from './Menu'
import OrderCommands from './OrderCommands'
import Guests from './Guests'
import { Grid } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { setAccordionIndex } from '../../redux/actions'
import 'semantic-ui-css/semantic.min.css';
import './Order.css'
import OrderHeader from './OrderHeader'
import OrderHeaderMobile from './OrderHeaderMobile'

const content = {
    backgroundColor: '#C0E9ED',
    height: '95vh',
    border: '1px solid #ccc',
    overflow: 'auto',
    marginLeft: '0px', 
  }




export default function Order() {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(setAccordionIndex(-1))
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
