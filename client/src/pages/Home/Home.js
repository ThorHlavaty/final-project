import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import {  makeStyles } from '@material-ui/core'


const useStyles = makeStyles(() => ({
    root: {
      background: 'none',
     
      
      
    },
    nav: {
      background: 'none',
      display: 'flex !important',
      justifyContent: 'space-between !important'

    },
    img: {
     

    },
    loginBtn: {
      borderColor:'#2babec ',
     color: '#2babec ',
     borderRadius: '30px'

    },
    
  }));


export default function Home() {

    const classes = useStyles();

    return (
        

        <div className={classes.root}>
            <Navbar className={classes.nav}  variant="light">
                <img className={classes.img} src = "public/logo.png" alt='logo'/>
                <Nav className="">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> 
                <Button className={classes.loginBtn} variant="outline-primary">Login</Button>           
            </Navbar>
        </div>
    )
}
