import React from 'react'
import { Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './OrderCommands.css'

export default function OrderCommands() {
  
  
  return (
    <Grid columns={2}>
      <Grid.Row>
      <Grid.Column style={{border:"1px solid black"}} color='blue'> 
        <Container textAlign='center'  fluid>Send</Container>
        </Grid.Column>
        <Grid.Column  style={{borderTop:"1px solid black", borderRight:"1px solid black", borderBottom:"1px solid black"}}  color='green'>
        <Container textAlign='center' fluid>Pay</Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column style={{borderLeft:"1px solid black", borderRight:"1px solid black", borderBottom:"1px solid black"}} color='grey'  > 
        <Container  textAlign='center' fluid>Cancel</Container>
        </Grid.Column>
        <Grid.Column style={{borderRight:"1px solid black", borderBottom:"1px solid black"}} color='red' >
        <Container  textAlign='center' fluid>Void</Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
