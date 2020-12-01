import React from 'react'
import { Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './OrderCommands.css'

export default function OrderCommands() {
  
  
  return (
    <Grid columns={2}>
      <Grid.Row>
      <Grid.Column style={{border:"1px solid white",
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           fontSize: '2rem'
      }} color='black'> 
                    Send
        </Grid.Column>
        <Grid.Column  style={{borderTop:"1px solid white", 
                              borderRight:"1px solid black", 
                              borderBottom:"1px solid white",
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '2rem'
                              
                              }}  color='black'>
                          Pay
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column style={{borderLeft:"1px solid white", 
                             borderRight:"1px solid white", 
                             display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             fontSize: '2rem'
                             }} color='black'  > 
        Cancel
        </Grid.Column>
        <Grid.Column style={{ borderBottom:"1px solid black",
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: '2rem'
      
      }} color='black' >
                Void
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
