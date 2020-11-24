import React, { useEffect } from 'react'
import menuData from '../../data'
import Menu from './Menu'
import OrderCommands from './OrderCommands'
import Guests from './Guests'
import { Grid } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { setAccordionIndex } from '../../redux/actions'

const content = {
    flexGrow: 1,
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
    <Grid>
      <Grid.Column style={content}>
        <Guests />
        <OrderCommands />
      </Grid.Column>
      <Grid.Column>
        {Object.keys(menuData).map((title, index) =>{
        return <Menu key={index} index={index} title={title}/>
        })}
      </Grid.Column>
    </Grid>
  ) 
}
