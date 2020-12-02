import React from 'react'
import { Grid } from 'semantic-ui-react'
import './Guest.css'
import { useSelector } from 'react-redux'
import AnItem from './AnItem'

export default function Guest(props) {
  const currentGuest = useSelector(state => state.currentGuest)
  const guestItemsObject = useSelector(state => state.guestItemsObject)
  
  function colorSelect(){
    if (currentGuest === props.id){
      return ('#74bff8')
    }
    else{
      return 'white'
    }
  }
  
  return (
    <>
     
      <span className='guest'>
      <h3 style={{background:colorSelect(), marginTop:'10px'}}>
        Guest {props.id}:
      </h3>
      {(guestItemsObject[props.id] !== undefined) &&  guestItemsObject[props.id].map((item, index) => ( <AnItem index={index} shorthand={item[0]} price={item[1]} />))}
      </span>
  </>
  )
}
