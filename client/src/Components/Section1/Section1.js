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
        // marginLeft: '10%',
        // marginRight: '10% !important',
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
    // right:{
    //     marginRight: '5%',
    //     position: "relative"
    // },

    
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
        <div className={`${classes.root} `} >
           <div className={classes.left}>
                <h1 className={classes.title} > Tools to run your
                business—even when it’s not business as usual.</h1>
                {/* <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4> */}

           </div>
           <div className={classes.btn}>
            <Link to='/users/register' className='btn-link'>
                <Button buttonSize = 'btn--large' buttonStyle='btn--main'> Get Started</Button>
                </Link>
           </div>
           {/* <div className={classes.right}>
                <img className={classes.cards} src='images/creditCards.png' alt='Credit Cards'/>

           </div> */}

            
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#74bff8" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,240C840,267,960,277,1080,256C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>wors</svg> */}
        </>
    )
}
