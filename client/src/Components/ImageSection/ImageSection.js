import React from 'react'
import './ImageSection.css'
import { makeStyles} from '@material-ui/core'
const useStyles = makeStyles(() => ({
    root: {
        background: 'linear-gradient(white, white 50%, black, black 50%)',
        minHeight:'45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        placeItems: 'center',
        top:'0px',
        // marginLeft: '10%',
        // marginRight: '10% !important',
        width: '100vw',
        marginBottom: '0 !important'
       
        
    },
    img1:{
        borderRadius: '10px',
        zIndex: '2',
        width:250,
        height:'auto',
        marginLeft: '5%'

    },
    img2:{
        borderRadius: '10px',
        width:250,
        height:'auto',
        margin: '5%'
    },
    img3:{
        borderRadius: '10px',
        width:250,
        height:'auto',
        marginRight: '5%'
    },


    
  }));



export default function ImageSection() {

    const classes = useStyles();

    return (
        <div id="gallery" className={classes.root}>
            <img id='img1'  className={classes.img1} src="images/manLeaning.jpg" alt="Business owner"/>
            <img id='img2' className={classes.img2} src="images/serverStanding.jpg" alt="Business owner"/>
            <img id='img3' className={classes.img3} src="images/girlAtDoor.jpg" alt="Business owner"/>
        </div>
    )
}
