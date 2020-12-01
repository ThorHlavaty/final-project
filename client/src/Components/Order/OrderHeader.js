import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {   Menu } from 'semantic-ui-react'
import { setCurrentGuest } from '../../redux/actions'
import './OrderHeader.css'

export default function OrderHeader() {
  const dispatch = useDispatch()
  const [guestCount, setGuestCount] = useState(4)
  const [activeItem, setActiveItem] = useState('')
  const currentGuest = useSelector(state=>state.currentGuest)

  function removeGuest(){
    if(guestCount === 0){
      return
    }else{
      setGuestCount(guestCount - 1)
      if (currentGuest > guestCount) {
        setCurrentGuest(guestCount)
        setActiveItem('removeGuest')
      }  
    }
  }
  
  function addGuest(){  
    setGuestCount(guestCount + 1)    
    setActiveItem('addGuest')
        
    }
  

  function previousGuest(){ 
    setActiveItem('previousGuest')
    return (currentGuest > 0 ? dispatch(setCurrentGuest(currentGuest - 1)) : console.log("can't go that low"))
  }

  function nextGuest(){ 
    setActiveItem('nextGuest')
    return (currentGuest < guestCount  ? dispatch(setCurrentGuest(currentGuest + 1)) : console.log("can't go that high"))
  }
  
  return (
    <Menu className='menu' inverted fluid style={{justifyContent:'center'}}>
        <Menu.Item
          style={{justify:'right', borderLeft:  '1px solid rgba(255,255,255,.08)'}}
          name='Table #'
        >
          Table #: 21
        </Menu.Item>  
      <Menu.Item
        name='Add Guest'
        active={activeItem === 'addGuest'}
        onClick={()=>addGuest()}
                  >
          +Add Guest
      </Menu.Item>   
        <Menu.Item
          name='Previous Guest'
          active={activeItem === 'previousGuest'}
          onClick={()=>previousGuest()}
          >
          {"<"}Previous Guest
        </Menu.Item>
        <Menu.Item
          name='Current Guest'
          style={{backgroundColor:'white', color:'black', border:'1px solid black'}}
          >
          Current Guest: {currentGuest}
        </Menu.Item>
        <Menu.Item
          name='Next Guest'
          active={activeItem === 'nextGuest'}
          onClick={()=>nextGuest()}
          >
          Next Guest{">"}
        </Menu.Item>   
        <Menu.Item
          name='Remove Guest'
          active={activeItem === 'removeGuest'}
          onClick={()=>removeGuest()}
          >
          -Remove Guest
        </Menu.Item>
      </Menu>
            
  )
}
