import React, { useState } from 'react'
import menuData from '../../data'
import MenuItem from './MenuItem'
import { Accordion, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccordionIndex } from '../../redux/actions';




export default function Menu(props) {
  const accordionIndex = useSelector(state => state.accordionIndex)
  const dispatch = useDispatch()

  function handleClick(index) {
    (index === accordionIndex ? dispatch(setAccordionIndex(-1)) : dispatch(setAccordionIndex(index)))
  }
  

  return (
    <Accordion>
    <Accordion.Title
          active={accordionIndex === props.index}
          index={props.index}
          onClick={handleClick(props.index)}
        >
      <h1>{props.title}<Icon name='dropdown' /></h1>
      </Accordion.Title>
      <Accordion.Content active={accordionIndex === props.index}>
            {menuData[props.title].map((item, index) => {
            return <MenuItem key={index} price={item.price} name={item.name}/>
            })}
      </Accordion.Content>
    </Accordion>
  )
}
