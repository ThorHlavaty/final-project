import { Mobile } from 'aws-sdk'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import MobileTable from '../pages/MobileTable/MobileTable'
import TableLayout from './TableLayout'

export default function Tables() {
  return (
    <Grid>
      <Grid.Row only='mobile'>
        <TableLayout />
      </Grid.Row>
      <Grid.Row only='mobile'>
        <MobileTable />  
      </Grid.Row>
    </Grid>
  )
}
