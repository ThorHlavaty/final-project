import React from 'react'
import { makeStyles} from '@material-ui/core'
import './Section1.css'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        background: '#fff',
        minHeight:'45vh',
        display: 'grid',
        placeItems: 'center',
        top:'0px',
        width: '100vw',
        flexWrap: 'wrap',
        
    },
    title: {
        padding: '80px 13%',
        margin: '0 auto',
        textAlign: 'center',
        color: '#000',
        fontSize: '5rem',
        fontWeight: '600px'
        
    },
    curve: {
        marginTop: '-10px',
        top:'0'
    },
    cards: {
        // width: 400,
        maxWidth: '400px',
        height: 'auto',
        display: 'block',

    },
    btn:{
        marginBottom: '30px !important',
        
    },

  }));
  
  
    





    

export default function Section1() {
    const classes = useStyles();
    
    return (
        <>
        <div className={`${classes.root} `} >
           <div className={classes.left}>
                <h1 className={classes.title} > Tools to run your
                business—even when it’s not business as usual.</h1>
             

           </div>
           <div className={classes.btn}>
            <Link to='/users/register' className='btn-link'>
                <Button buttonSize = 'btn--large' buttonStyle='btn--main'> Get Started</Button>
                </Link>
           </div>
      

            
        </div>

        </>
    )
}
