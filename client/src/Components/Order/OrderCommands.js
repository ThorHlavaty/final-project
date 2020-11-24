import React from 'react'
import { Button, Grid } from 'semantic-ui-react';

export default function OrderCommands() {
  
  
  return (
    <Grid columns={2}>
      <Grid.Column>
          <Button >Send</Button>
        </Grid.Column>
        <Grid.Column>
          <Button >Cancel</Button>
        </Grid.Column>
        <Grid.Column>
          <Button >Close</Button>
        </Grid.Column>
        <Grid.Column>
          <Button >Void</Button>
        </Grid.Column>
    </Grid>
  )
}
