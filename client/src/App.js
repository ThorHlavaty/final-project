import Login from './pages/Login/Login';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Container } from '@material-ui/core'
import Register from './pages/Register/Register';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <>
    <Container>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} /> 
      <Route path="/register" exact component={Register} /> 
    </Switch>
    </Container>
    </>
  );
}

export default App;
