import React, { useState , useEffect} from 'react';
import axios from 'axios';

export default function Login() {

  const [pin, setPin] = useState('');

  const [users, setUsers] = useState([]);

  const [id, setid] = useState('')


  // Get All users and their id
  useEffect(()=>{
    axios.get('/users')
    .then(res => {
      setUsers(res.data)
    })
  },[])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('/users/login',{
      pin,
      id,
    })
    .then(res => {
      setPin('')
      setid('')
    })
    .catch(err =>  console.log(err))
  }


  const handlePin = (e) => {
    setPin(e.target.value)
  }

  const handleID = (e) => {
    setid(e.target.value)
  }

  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="id">Select Employee</label>
          <select id='id' name='id' onChange={handleID} value={id} required>
            <option value="" disabled selected >Select Employee</option>
            {users.map(user =>{
              return <option key ={user.id} value={user.id}>{user.id} - {user.name}</option>
            })}
          </select>
        </div>
        <div>
          <label htmlFor="pin">Enter Pin</label>
          <input type="password" id='pin' name='pin' onChange={handlePin} value={pin} placeholder='Enter Pin'/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
