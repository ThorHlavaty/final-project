import React from 'react'
import { makeStyles} from '@material-ui/core'
import './Section2.css'
import { MdTitle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        background: '#000',
        maxHeight:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top:'0 bottom !important',
        textAlign: 'center',
        width: '100vw',
        flexWrap: 'wrap',
        padding: '0',
    },
   
  
    left:{
        left: '0 !important',
        width: '50vw',
        margin: '0',
        bottom:'0 !important',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
    },
    img:{
        padding: '0 !important',
        bottom:'0 !important',
        minWidth: '250px !important'
        
    },
    paragraph:{
        padding: '20px',
        fontWeight:'300',
        fontSize: '2rem',
        color: '#fff !important'
    },
    title:{
        fontWeight:'500',
        fontSize: '3rem',
    },
    link:{
        fontWeight:'600',
        fontSize: '1.8rem',
        color:'#74bff8',
    },
    centerText:{
        color: '#fff',
        padding: '12%  20%'
    },

    
  }));

export default function Section2() {

    const classes = useStyles();

    return (
        <>
        <div className={classes.root} >
           {/* <div className={classes.left}>
                <img className={classes.img} src='images/paymentDock.jpg' alt='Credit Cards'/>

           </div> */}
           <div className={classes.centerText}>
                <h2 className={classes.title} > This year taught me a
                    lot as a business owner.</h2>
                <p className={classes.paragraph}>"We set out to hear from business owners
                    as they navigate the challenges of 2020".</p>
                <Link to='/users/register' >
                <p className={classes.link}> Start Your Journey Here{'>'} </p>
                </Link>
           </div>
        </div>
       
        </>
    )
}
