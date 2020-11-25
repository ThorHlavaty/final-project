import React, { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { signin } from './redux/actions';
import { useHistory } from 'react-router-dom';

export default function Login() {

  const [pin, setPin] = useState('');

  const [users, setUsers] = useState([]);

  const [id, setid] = useState('')

  const dispatch = useDispatch()

  const history = useHistory()

  // Get All users and their id
  // useEffect(()=>{
  //   axios.get('/users')
  //   .then(res => {
  //     setUsers(res.data)
  //   })
  // },[])


  // Cleanup function
  useEffect(() => {
    axios.get('/users')
    .then(res => {
      setUsers(res.data)
    })

    const source = axios.CancelToken.source()

    const fetchUsers = async () => {
        try {
            await axios.get('/users', {
                cancelToken: source.token,
            })
            // ...
        } catch (error) {
            if (axios.isCancel(error)) {
            } else {
                throw error
            }
        }
    }

    fetchUsers()

    return () => {
        source.cancel()
    }
}, [])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(id, pin))
    .then(res => {
      history.push('/users/dashboard')
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
            <option value="" disabled  >Select Employee</option>
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
