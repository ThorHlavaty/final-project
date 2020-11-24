import React from 'react'
import { Button, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


export default function OrderCommands() {
  
  
  return (
    <Grid columns={2}>
      <Grid.Row>        
      <Grid.Column>
          <Button >Send</Button>
        </Grid.Column>
        <Grid.Column>
          <Button >Cancel</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button >Close</Button>
        </Grid.Column>
        <Grid.Column>
          <Button >Void</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
