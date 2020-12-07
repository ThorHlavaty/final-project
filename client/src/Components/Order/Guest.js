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

  
  useEffect(()=>{
    Axios.get(`/api/v1/table/${tableId}`)
    .then(res => {
      dispatch(setTableNum(res.data.number))
      let currentOrder = {}
      res.data.Guests.forEach(order => {
        console.log(order.Items)
        currentOrder[order.seat] = order.Items.map(item =>[item.name, item.cost, item.id ])
      })
      dispatch(setGuestItemsObject(currentOrder))
      let seatNum = res.data.Guests.reduce((prev, curr, i)=> (curr.seat > prev ? curr.seat : prev), 1)
      dispatch(setGuestCount(seatNum))
    })
  },[dispatch, tableId, id])

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
