import React from 'react'

export default function MenuItem(props) {
  return (
    <div>
      {props.name} - ${props.price}
    </div>
  )
}
