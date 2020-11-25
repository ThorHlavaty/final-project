import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import Guest from './Guest';
import './Guests.css'



const content = {
    height: '540px',
    overflow: 'auto',
    scrollbarWidth: '0px',
    paddingLeft:'10px',
    paddingTop:'10px',
    paddingRight:'0.5px'
  }



export default function Guests() {
const [numberOfGuests, setNumberOfGuests] = useState(4)

  return (
    <main style={content}>
      {[...Array(numberOfGuests)].map((value, index) => (
  <Guest id={index + 1} key={index} />
))}
    </main>
  )
}
