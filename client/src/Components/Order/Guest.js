import React, { useEffect } from 'react'
import './Guest.css'
import { useDispatch, useSelector } from 'react-redux'
import AnItem from './AnItem'
import { useParams } from 'react-router-dom'
import { setAccordionIndex, setCurrentGuest, setGuestCount, setGuestItemsObject, setTableId, setTableNum } from '../../redux/actions'
import Axios from 'axios'

export default function Guest({id}) {

  const currentGuest = useSelector(state => state.currentGuest)
  const guestItemsObject = useSelector(state => state.guestItemsObject)
  const dispatch = useDispatch()
const tableId = useSelector(state => state.tableId)

  
  
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
