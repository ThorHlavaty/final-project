import React from 'react'
import { makeStyles} from '@material-ui/core'
import './Section3.css'
import { MdTitle } from 'react-icons/md';

const useStyles = makeStyles(() => ({
    root: {
        background: '#fff',
        maxHeight:'100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top:'0 bottom !important',
        width: '100vw',
        flexWrap: 'wrap',
        padding: '0',
        margin: '50px 0',
        color: '#000',

    },
   
    right:{
        margin: '10%',
        width: '30vw',
        color: '#000',
        bottom:'0 !important',
    },
  
    img:{
        width: '30vw',
        padding: '0 !important',
        bottom:'0 !important',
        borderRadius: '15px',
        height: 'auto',
        margin: '10%',
        minWidth: '250px'
        
    },
    paragraph:{
        fontWeight:'300',
        fontSize: '1.6rem',
    },
    title:{
        fontSize: '2.5rem',
    }

    
  }));

export default function Section3() {

    const classes = useStyles();

    return (
        <>
        <div id="base" className={classes.root} >
           
                <img id="img" className={classes.img} src='images/paymentDock.jpg' alt='Credit Card Dock'/>

           <div id="text" className={classes.right}>
                <h2 className={classes.title} > The worlds first POS that's not A POS</h2>
                <p id="paragraph" className={classes.paragraph}>From retail to restaurants, we have tools to help anyone start selling online. Create a free online store that syncs with your inventory and social media to help you sell right away.</p>

           </div>

            
        </div>
       
        </>
    )
}
