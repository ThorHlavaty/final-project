import React, { useEffect } from 'react'
import menuData from '../../data'
import Menu from './Menu'
import OrderCommands from './OrderCommands'
import Guests from './Guests'
import { Grid } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { setAccordionIndex } from '../../redux/actions'
import 'semantic-ui-css/semantic.min.css';


const content = {
    backgroundColor: '#C0E9ED',
    height: '600px',
    border: '1px solid #ccc',
    overflow: 'auto'
  }




export default function Order() {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(setAccordionIndex(-1))
},[dispatch])
  
  return (
    
    <Grid columns={2}>
      <Grid.Column >
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
