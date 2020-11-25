import React from 'react'
import { makeStyles} from '@material-ui/core'
import './Section1.css'

const useStyles = makeStyles(() => ({
    root: {
        background: '#74bff8',
        height:'45vh',
        display: 'grid',
        placeItems: 'center',
        top:'0',
        textAlign: 'center'
    },
    title: {
        paddingTop: '10%',
        margin: '0 auto',
        paddingLeft: '2%',
        paddingRight: '2%',
        
    },
    curve: {
        marginTop: '-10px',
        top:'0'
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
   





    

export default function Section1() {
    const classes = useStyles();
    
    return (
        <>
        <div className={classes.root}>
                <h1 className={classes.title} > The worlds first POS that's not A POS</h1>

            
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#74bff8" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,240C840,267,960,277,1080,256C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>wors</svg>
        </>
    )
}
