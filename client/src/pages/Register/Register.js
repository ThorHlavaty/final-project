import React from 'react'
import { Container, Grid, TextField, makeStyles, Button } from '@material-ui/core'
import './Register.css'

const useStyles = makeStyles(() => ({
    container: {
      background: 'white',
      borderRadius: '15px',
      maxWidth: '65%',
      marginTop: '30%'
      
    },
    button: {
      background: '#2babec',
      color:'white'
      
      
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
        <div>
            <Container className={classes.container}>
                <form>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Manager" name="manager" size="small" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Manager Password" name="managerPassword" size="small" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Username" name="username" size="small" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            fullWidth
                            label="Pin"
                            name="pin"
                            size="small"
                            type="pin"
                            variant="outlined"
                            />
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.button} fullWidth type="submit" variant="contained">
                        Log in
                        </Button>
                    </Grid>
                    </Grid>
                    </form>
            </Container>
        </div>
    )
}
