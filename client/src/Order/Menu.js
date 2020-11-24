import React from 'react'
import menuData from '../data'
import MenuItem from './MenuItem'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function Menu(props) {
  return (
  <div>
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      <h1>{props.title}</h1>
      </AccordionSummary>
            {menuData[props.title].map((item, index) => {
            return <MenuItem key={index} price={item.price} name={item.name}/>
            })}
    </Accordion>
  </div>
  )
}
