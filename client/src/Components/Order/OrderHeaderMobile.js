import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { setCurrentGuest, setGuestCount } from '../../redux/actions'


export default function OrderHeaderMobile() {
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState('')
  const currentGuest = useSelector(state=>state.currentGuest)
  const tableNum = useSelector(state => state.tableNum)
  const guestCount = useSelector(state => state.guestCount)

  function removeGuest(){
    if(guestCount === 0){
      return
    }else{
      dispatch(setGuestCount(guestCount - 1))
      if (currentGuest > guestCount) {
        setCurrentGuest(guestCount)
        setActiveItem('removeGuest')
      }  
    }
  }
  
  function addGuest(){  
    dispatch(setGuestCount(guestCount + 1))
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
    <Menu inverted fluid style={{justifyContent:'center'}}>
    <Menu.Item
        name='Add Guest'
        active={activeItem === 'addGuest'}
        onClick={()=>addGuest()}
                  >
          +Guest
      </Menu.Item>
      <Menu.Item
        name='Previous Guest'
        active={activeItem === 'previousGuest'}
        onClick={()=>previousGuest()}
        >
        {"<"}
      </Menu.Item>
      <Menu.Item
        name='Current Guest'
        style={{backgroundColor:'white', color:'black', border:'1px solid black'}}
        >
        Guest #:{currentGuest}
      </Menu.Item>
      <Menu.Item
        name='Next Guest'
        active={activeItem === 'nextGuest'}
        onClick={()=>nextGuest()}
        >
        {">"}
      </Menu.Item>
      <Menu.Item
        name='Remove Guest'
        active={activeItem === 'removeGuest'}
        onClick={()=>removeGuest()}
        >
        -Guest
      </Menu.Item>
        <Menu.Item
          name='Table #'
          style={{padding:'0px, 0px'}}
        >
          #{tableNum}
      </Menu.Item>
      </Menu>
  )
}
