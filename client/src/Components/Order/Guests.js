import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Guest from './Guest';
import './Guests.css'



const content = {
    height: '540px',
    overflow: 'auto',
    scrollbarWidth: '0px',
    paddingLeft:'1px',
    paddingTop:'10px'
  }



export default function Guests() {
const [numberOfGuests] = useState(4)

  return (
    <Container style={content}>
      {[...Array(numberOfGuests)].map((value, index) => (
  <Guest id={index + 1} key={index} />
))}
    </Container>
  )
}
