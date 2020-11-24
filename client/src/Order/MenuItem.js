import  AccordionDetails from '@material-ui/core/AccordionDetails'
import React from 'react'

export default function MenuItem(props) {
  return (
    <AccordionDetails>
      {props.name} - ${props.price}
    </AccordionDetails>
  )
}
