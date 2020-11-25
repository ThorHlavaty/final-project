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

const content = {
    backgroundColor: '#C0E9ED',
    height: '650px',
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
    
    <Grid stretched columns={2}>
      <Grid.Column style={{paddingLeft:'1rem', paddingRight:'1rem', paddingBottom:'1rem'}}>
        <Guests />
        <OrderCommands />
      </Grid.Column>
      <Grid.Column style={content} >
        {Object.keys(menuData).map((title, index) =>{
          return <Menu key={index} index={index} title={title}/>
        })}
      </Grid.Column>
    </Grid>
  ) 
}
