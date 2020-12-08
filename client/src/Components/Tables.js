import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ManagerDashboard from '../pages/ManagerDashboard/ManagerDashboard'
import MobileTable from '../pages/MobileTable/MobileTable'
import TableLayout from './TableLayout'

export default function Tables() {
  const manager = useSelector(state=>state.userSignin.userInfo.manager)
  const [windowWidth, setWindowWidth] = useState()

  useEffect(()=>{
    function handleResize(){
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
},[ setWindowWidth])



  return (
    <div style={{ height:'100vh'}}>
      {(manager && windowWidth >= 620) && 
      
      <div>
        <ManagerDashboard/>
      </div>
      }
      {(windowWidth < 620) && 
      
      <div >
        <MobileTable />  
      </div>
      }
      {(!manager && windowWidth >=620) && 
      
      <div style={{backgroundColor:'#2A2935', height:"100vh", display:'grid', placeItems:'center'}}>
        <TableLayout />
      </div>
      }
    </div>
  )
}
