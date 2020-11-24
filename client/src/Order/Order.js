import React from 'react'
import menuData from '../data'
import Menu from './Menu'


export default function Order() {
  
  
  return (
    <div>
      {Object.keys(menuData).map((title, index) =>{
        return <Menu key={index} title={title}/>
      })}
    </div>
  )
}
