import React from 'react'
import { Grid } from 'semantic-ui-react'
import './Guest.css'
import { useSelector } from 'react-redux'
import AnItem from './AnItem'

export default function Guest(props) {
  const currentGuest = useSelector(state => state.currentGuest)
  const guestItemsObject = useSelector(state => state.guestItemsObject)
  
  function colorSelect(){
    if (currentGuest === props.id){
      return ('powderblue')
    }
    else{
      return 'white'
    }
  }
  
  return (
    <>
      <div className="guest">
        <h3>
          Guest {props.id}:
        </h3>
        <Grid divided style={{fontSize:'1rem'}}>
        <Grid.Column></Grid.Column> 
        <Grid.Column style={{fontSize:'1rem', width:'14vw'}}>
          CHIX TACO
        </Grid.Column>
        <Grid.Column  className="price" style={{fontSize:'1rem', width:'31vw', textAlign:'right'}}>
          Total: $8.95
        </Grid.Column>
      </Grid>
    </div>
      <span>
      <h3 style={{background:colorSelect(), marginTop:'10px'}}>
        Guest {props.id}:
      </h3>
      {(guestItemsObject[props.id] !== undefined) &&  guestItemsObject[props.id].map((item, index) => ( <AnItem index={index} shorthand={item[0]} price={item[1]} />))}
      </span>
  </>
  )
}
