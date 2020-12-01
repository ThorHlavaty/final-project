import React from 'react'
import { Grid } from 'semantic-ui-react'
import './Guest.css'

export default function Guest(props) {
  return (
    <>
    <div className="guest">
      <h3>
        Guest {props.id}:
      </h3>
      <Grid divided style={{fontSize:'1rem'}}>
      <Grid.Column></Grid.Column> 
      <Grid.Column style={{fontSize:'1rem', width:'14vw'}}>
        CHIX TACO
      </Grid.Column>
      <Grid.Column  className="price" style={{fontSize:'1rem', width:'31vw', textAlign:'right'}}>
        Total: $8.95
      </Grid.Column>
    </Grid>
  </div>
    </>
  )
}
