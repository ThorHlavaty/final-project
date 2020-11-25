import React from 'react'
import { makeStyles} from '@material-ui/core'
import './Register.css'
import { Button, Form } from 'semantic-ui-react'



const useStyles = makeStyles(() => ({
    root: {
      background: '#c0e9ed',
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
      boxShadow: '0 4px 6px -6px black'
      
    },
    formLabel: { 
      color:'#1F526B !important'
      
    },
    logo: { 
      marginBottom:'20px'
      
    },
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

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Form className={classes.form} >
                <img className={classes.logo} src='/public/logo.png' alt='logo' />
                <Form.Field>
                    <label className={classes.formLabel} >New Member</label>
                    <input placeholder='Member Name' />
                </Form.Field>
                <Form.Field>
                    <label className={classes.formLabel} >New Pin</label>
                    <input placeholder='Pin' />
                </Form.Field>
                <Form.Field>
                    <label className={classes.formLabel} >Manager</label>
                    <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label className={classes.formLabel} >Manager Pin</label>
                    <input placeholder='Pin' />
                </Form.Field>
                <Button id='svg' className={classes.button} type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}
