import React from 'react'
import 'semantic-ui-css/semantic.min.css';


export default function MenuItem(props) {
  return (
    <div>
      {props.name} - ${props.price}
    </div>
  )
}
