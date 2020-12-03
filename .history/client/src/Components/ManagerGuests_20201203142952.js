import React from 'react'
import { useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Guest from './Order/Guest';
import './Order/Guests.css'



const content = {
    maxwidth: '40',
    overflow: 'hidden',
    scrollbarWidth: '0px',
    paddingLeft:'14px',
    paddingRight:'0 !important',
    paddingTop:'0px',
    overflowY: 'scroll',
    display: 'flex !important',
    flexDirection:'column !important',
    alignItems:'space-between !important',
  }



export default function ManagerGuests() {
const guestCount = useSelector(state => state.guestCount)

  return (
    <Container style={content}>
      {[...Array(guestCount)].map((value, index) => (
  <Guest id={index + 1} key={index} />
))}
    </Container>
  )
}
