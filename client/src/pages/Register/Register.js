import React, { useState }  from 'react'
import { makeStyles} from '@material-ui/core'
import './Register.css'
import { Button, Form, Header } from 'semantic-ui-react'
import {register} from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { MdTrackChanges } from "react-icons/md";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const useStyles = makeStyles(() => ({
    root: {
      background: '#1F526B',
      padding: 0,
      margin:0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center !important',
      
    },
    button: {
      background: '#2babec !important',
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
      color:'#1F526B !important'
      
    },
    logo: { 
      marginBottom:'20px'
      
    },
    h1:{
      color:'#1F526B !important',
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

  const [ visibility, setVisibility] = useState(true);


  const visible = (e) =>{
    e.preventDefault()
    setVisibility(!visibility)
  }

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


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Form className={classes.form} >
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
                    <input 
                      placeholder='Pin' 
                      required 
                      onChange={handlePin} 
                      value={pin}
                      name='pin'
                    />
                    {<Button 
                      className={classes.seek} 
                      onClick={visible} 
                      type='submit'>
                      {visibility ? <BsEyeFill/> 
                      : <BsEyeSlashFill/>}
                    </Button>}
                </Form.Field>
                {/* <Form.Field>
                    <label className={classes.formLabel} >Manager</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label className={classes.formLabel} >Manager Pin</label>
                    <input placeholder='Pin' />
                </Form.Field> */}
                <Button id='svg' className={`${classes.button} `}type='submit' onClick={handleFormSubmit}>Sign Up</Button>
            </Form>
        </div>
    )
}
