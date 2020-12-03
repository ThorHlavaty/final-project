import React, { useState , useEffect} from 'react'
import { makeStyles} from '@material-ui/core'
import './Login.css'
import { Button, Form, Header } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { signin } from '../../redux/actions';
import { useHistory, Link } from 'react-router-dom';
import { MdTrackChanges } from "react-icons/md";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const useStyles = makeStyles(() => ({
    root: {
      background: '#000',
      padding: 0,
      margin:0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center !important',
      
    },
    button: {
      background: '#74bff8 !important',
      color:'white !important'
      
    },
    form: { 
        marginTop: '50px',
      display:'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      background: '#fff',
      padding:'20px',
      maxHeight: '400px !important',
      borderRadius: '15px',
      boxShadow: '0 4px 6px -6px black',
      color:'#1F526B !important',
      justifySelf: 'center'
    },
    formLabel: { 
      color:'#000 !important'
      
    },
    logo: { 
      margin: '0 auto',
      maxWidth: '200px',
      maxHeight: '200px !important',
    },
    h1:{
      color:'#000 !important',
      alignSelf: 'center',
      marginBottom: '30px !important'
    },
    seek:{
      background: 'none !important',
      padding: 0,
      width: '3px !important'
      
      
    },
    pwBar:{
      display: 'flex',
      
    },
    pinInput:{
      border: '1px grey solid',
      
    }
  }));
  
  
    

// fetch()
// .then(response => response.json())
// .then(data => {
//    console.log(data)
    
// })
// .catch(err => {
//  console.error(err);
// });
   



export default function Login() {

  const [pin, setPin] = useState('');

  const [users, setUsers] = useState([]);

  const [id, setid] = useState('')

  const dispatch = useDispatch()

  const history = useHistory()

  const [ visibility, setVisibility] = useState(true);

  // Get All users and their id
  // useEffect(()=>{
  //   axios.get('/users')
  //   .then(res => {
  //     setUsers(res.data)
  //   })
  // },[])


 const visible = (e) =>{
   e.preventDefault()
   setVisibility(!visibility)
 }

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

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Form className={classes.form} 
              onSubmit={handleFormSubmit} >

          <Header className={classes.h1} 
                  as='h1'>{<MdTrackChanges />}NADA
          </Header>
          <Form.Field>
            <label 
            className={classes.formLabel}>
              Employee
            </label>
            {/* <Dropdown                    
                        placeholder='Select Member'
                        fluid
                        selection
                        options={users.map(user =>{
                          return <option key ={user.id} value={user.id}>{user.id} - {user.name}</option>
                        })}
                    /> */}
            <select 
            id='id' 
            name='id' 
            onChange={handleID} 
            value={id} 
            required>
              <option 
                value="" 
                disabled  >
                  Select Employee
              </option>
              {users.map(user => {
                return <option 
                          key={user.id} 
                          value={user.id}>
                            {user.id} - {user.name}
                       </option>
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <label 
            htmlFor="pin" 
            className={classes.formLabel} >
              PIN 
            </label>
            <div className={classes.pwBar}>
            <input 
              className={classes.pinInput}
              placeholder='PIN' 
              name='pin' 
              onChange={handlePin} 
              type={visibility ? 'password' : 'text'} 
              value={pin} />
              <Button 
                  className={classes.seek} 
                  onClick={visible} 
                  type='submit'>
                  {visibility ? <BsEyeFill/> 
                  : <BsEyeSlashFill/>}
              </Button>
              </div>
          </Form.Field>
          <Button id='svg' className={classes.button} type='submit'>Login</Button>

          <Link to='/users/register'>Forgot Password?</Link>
          <Link to='/users/register'>Register</Link>
        </Form>
      </div>
    )
}
