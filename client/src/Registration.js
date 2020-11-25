import React, { useState} from 'react';
import axios from 'axios';

export default function Registration() {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('users/register',{
      name,
      pin
    })
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
      <form action="/users/register" method='POST'>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' id='name' placeholder='Enter Name' onChange={handleName} required/>
        </div>
        <div>
          <label htmlFor="pin">Pin</label>
          <input type="password" name='pin' id='pin' placeholder='Enter Pin' required onChange={handlePin}/>      
        </div>
        <button type='submit' onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  )
}
