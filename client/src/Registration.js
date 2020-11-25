import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {register} from '../src/redux/actions'


export default function Registration() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');




  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name,pin))
    .then(res => {
      setName('')
      setPin('')
    })
    .catch(err =>  console.log(err))
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePin = (e) => {
    setPin(e.target.value)
  }


  return (
    <div>
      <form id='newRegisterForm' action="/api/users/register" method='POST'>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' placeholder='Enter Name' onChange={handleName} value={name} required/>
        </div>
        <div>
          <label htmlFor="pin">Pin</label>
          <input type="password" name='pin' id='pin' placeholder='Enter Pin' required onChange={handlePin} value={pin}/>      
        </div>
        <button form='newRegisterForm' type='submit' onClick={handleFormSubmit} >Submit</button>
      </form>
    </div>
  )
}
