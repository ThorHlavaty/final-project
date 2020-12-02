import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Section1 from '../../Components/Section1/Section1'
import Section2 from '../../Components/Section2/Section2'
import Section3 from '../../Components/Section3/Section3'
import Footer from '../../Components/Footer/Footer'
import { makeStyles} from '@material-ui/core'
import ImageSection from '../../Components/ImageSection/ImageSection'

const useStyles = makeStyles(() => ({
  section1: {
      
      
      
  },

  
}));

export default function Home() {
  const classes = useStyles();

    return (    
      <>
        <Navbar/>
        <Section1 className={classes.section1}/>
        <ImageSection className={classes.ImageSection}/>
        <Section2 className={classes.section2}/>
        <Section3 className={classes.section3}/>
        <Footer/>
        </>
    )
}
