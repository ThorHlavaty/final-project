import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function Guest(props) {
  return (
    <>
    <h3>
      Guest {props.id}:
    </h3>
    <Grid celled style={{fontSize:'12px'}}>
    <Grid.Column style={{fontSize:'12px'}}  width={2}>
      CHIX TACO
    </Grid.Column>
    <Grid.Column floated='right' style={{fontSize:'12px', textAlign:'right'}} width={10}>
      $8.95
    </Grid.Column>
  </Grid>
    </>
  )
}
