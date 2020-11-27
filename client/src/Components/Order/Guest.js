import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function Guest(props) {
  return (
    <>
    <h3>
      Guest {props.id}:
    </h3>
    <Grid divided style={{fontSize:'12px'}}>
    <Grid.Column style={{fontSize:'12px', width:'14vw'}}>
      CHIX TACO
    </Grid.Column>
    <Grid.Column  style={{fontSize:'12px', width:'31vw', textAlign:'right'}}>
      $8.95
    </Grid.Column>
  </Grid>
    </>
  )
}
