import React, { useState }  from 'react'
import { makeStyles} from '@material-ui/core'
import './Register.css'
import { Button, Form, Header } from 'semantic-ui-react'
import {register} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { MdTrackChanges } from "react-icons/md";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useHistory} from 'react-router-dom';
import MessageBox from '../../Components/MessageBox'

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
      background: '#000 !important',
      color:'white !important'
      
    },
    form: { 
        marginTop: '50px',
      display:'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      background: '#fff',
      padding:'20px',
      maxHeight: '500px !important',
      borderRadius: '15px',
      boxShadow: '0 4px 6px -6px black',
      color:'#1F526B !important'
      
    },
    formLabel: { 
      color:'#000 !important'
      
    },
    logo: { 
      marginBottom:'20px'
      
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
// 	console.error(err);
// });
   



export default function Register() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErroressage] = useState(false)

  const [ visibility, setVisibility] = useState(true);
  const history = useHistory()

  const userRegister = useSelector((state) => state.userRegister);
  const {error} = userRegister;

  const visible = (e) =>{
    e.preventDefault()
    setVisibility(!visibility)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name,pin))
    .then(res => {
      if(!errorMessage){
        history.push('/users/register')
      }else{
        history.push('/users/login')
        setName('')
        setPin('')
      }
    })
    .catch(err =>  console.log(err))
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePin = (e) => {
    setPin(e.target.value)
  }


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Form onSubmit={handleFormSubmit} className={classes.form} >
            {error && <MessageBox variant="danger">{error}</MessageBox>}
                {/* <img className={classes.logo} src='/logo.png' alt='logo' /> */}
                <Header className={classes.h1} as='h1'>{<MdTrackChanges/>}NADA</Header>
                <Form.Field>
                    <label htmlFor="name" className={classes.formLabel} >New Member</label>
                    <input placeholder='Member Name' onChange={handleName}
                    value={name}
                    name='name'/>
                </Form.Field>
                <Form.Field>
                    <label 
                      htmlFor="pin" 
                      className={classes.formLabel} >
                        New Pin
                    </label>
                    <div className={classes.pwBar}>
                    <input 
                      placeholder='Pin' 
                      required 
                      onChange={handlePin} 
                      value={pin}
                      name='pin'
                      type={visibility ? 'password' : 'text'}
                    />
                    <Button 
                      className={classes.seek} 
                      onClick={visible} 
                      type='submit'>
                      {visibility ? <BsEyeFill/> 
                      : <BsEyeSlashFill/>}
                    </Button>
                    </div>
                </Form.Field>
                {/* <Form.Field>
                    <label className={classes.formLabel} >Manager</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label className={classes.formLabel} >Manager Pin</label>
                    <input placeholder='Pin' />
                </Form.Field> */}
                <Button id='svg' className={classes.button}type='submit' >Sign Up</Button>
                <Link to='/users/login'>Login</Link>
            </Form>
        </div>
    )
}
