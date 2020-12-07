import React from 'react'
import menuData from '../../data'
import MenuItem from './MenuItem'
import { Accordion, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccordionIndex } from '../../redux/actions';
import 'semantic-ui-css/semantic.min.css';
import './Menu.css'



export default function Menu(props) {
  const accordionIndex = useSelector(state => state.accordionIndex)
  const dispatch = useDispatch()

  function handleClick(index) {
    (index === accordionIndex ? dispatch(setAccordionIndex(-1)) : dispatch(setAccordionIndex(index)))
  }
  

  return (
    <Accordion style={{borderBottom:'2px solid #fff' }}> 
    <Accordion.Title
          active={accordionIndex === props.index}
          index={props.index}
          onClick={() => handleClick(props.index)}
          
        >
      <h1>{props.title}<a href="#"><div class="fa fa-chevron-right rotate"></div></a></h1>
      </Accordion.Title>
      <Accordion.Content active={accordionIndex === props.index}>
            {menuData[props.title].map((item, index) => {
            return <MenuItem key={index} price={item.price} shorthand={item.shorthand} name={item.name}/>
            })}
      </Accordion.Content>
    </Accordion>
  )
}
