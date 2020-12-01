import React from 'react'
import { Grid } from 'semantic-ui-react'
import './Guest.css'

export default function AnItem(props) {
  return (
    <div className='guest'>
    <Grid divided style={{fontSize:'12px'}}>
    <Grid.Column width={8}  style={{fontSize:'12px'}}>
      {props.shorthand}
    </Grid.Column>
    <Grid.Column width={8} style={{fontSize:'12px', textAlign:'right'}}>
      {props.price}
    </Grid.Column>
  </Grid>
    </div>
  )
}
