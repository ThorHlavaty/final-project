import React from 'react'

import './Guest.css'
import { useSelector, useDispatch } from 'react-redux'
import AnItem from './AnItem'


export default function Guest({id}) {

  const currentGuest = useSelector(state => state.currentGuest)
  const guestItemsObject = useSelector(state => state.guestItemsObject)
  
  function colorSelect(){
    if (currentGuest === id){
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
        Guest {id}:
      </h3>
      {(guestItemsObject[id] !== undefined) &&  guestItemsObject[id].map((item, index) => ( <AnItem  key={index} shorthand={item[0]} price={item[1]} item={item} index={index} guest={id} />))}
      </span>
  </>
  )
}
