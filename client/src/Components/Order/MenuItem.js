import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { setGuestItemsObject } from '../../redux/actions';


export default function MenuItem(props) {
  const dispatch = useDispatch()
  const guestItemsObject = useSelector(state=>state.guestItemsObject)
  const currentGuest = useSelector(state=>state.currentGuest)

  function addItem(){
    console.log(guestItemsObject[1])
    if (currentGuest in guestItemsObject) {
      const newArray = [...guestItemsObject[currentGuest]]
      newArray.push([props.shorthand, props.price])
      console.log(newArray)
      const newObject = {...guestItemsObject}
      newObject[currentGuest] = newArray
      dispatch(setGuestItemsObject(newObject))
    }
    else {
      const newObject = {...guestItemsObject}
      newObject[currentGuest] = [[props.shorthand, props.price]]
      dispatch(setGuestItemsObject(newObject))
    }
  }
  
  return (
    <Button style={{fontSize:'13px', marginBottom:'5px'}} onClick={()=>addItem()}>
      {props.name} - ${props.price}
    </Button>
  )
}
