import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ManagerDashboard from '../pages/ManagerDashboard/ManagerDashboard'
import MobileTable from '../pages/MobileTable/MobileTable'
import TableLayout from './TableLayout'

export default function Tables() {
  const manager = useSelector(state=>state.userSignin.userInfo.manager)
  
  return (
    <Grid>
      {manager ? 
      <>
      <Grid.Row  only='computer tablet' style={{paddingTop:'14px', paddingBottom:'0px', paddingLeft:'14px'}}>
        <ManagerDashboard/>
      </Grid.Row>
      <Grid.Row only='mobile' style={{paddingTop:'14px', paddingBottom:'0px', paddingLeft:'14px'}}>
        <MobileTable />  
      </Grid.Row>
    </> :
      <>
      <Grid.Row  only='computer tablet' style={{paddingTop:'14px', paddingBottom:'0px', paddingLeft:'14px'}}>
        <TableLayout/>
      </Grid.Row>
      <Grid.Row only='mobile' style={{paddingTop:'14px', paddingBottom:'0px', paddingLeft:'14px'}}>
        <MobileTable />  
      </Grid.Row>
    </>}
    </Grid>
  )
}
