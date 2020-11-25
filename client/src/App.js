import Registration from './Registration'
import React, { useEffect} from 'react';
import './App.css';
import Login from './Login';
import {Link, Route, Switch} from 'react-router-dom'
import Dashboard from './Dashboard';

import Order from './Components/Order/Order';

import PrivateRoute from './Components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './redux/actions';
import {signout} from '../src/redux/actions'

function App() {

  const dispatch = useDispatch()

  const {userInfo, check} = useSelector((state) => state.userSignin)

  const signoutHandler =() => {
    dispatch(signout())}

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])

  if(!check && !userInfo){
    return 'Loading'
  }

  return (
    <>

      {/* <Link to='/users/register'>Register</Link>
      <Link to='/users/login'>Login</Link>
      <Link to='/users/dashboard'>Dashboard</Link>
      <Link to='/table/id'>Table Test page</Link> */}

      <Link to='/users/register'>Register</Link>
      <Link to='/users/dashboard'>Dashboard</Link>

      {userInfo ? (
      <Link to='/' onClick={signoutHandler}>Sign Out</Link>) : (<Link to='/users/login'>Login</Link>)}




      <Switch>
        <Route exact path='/'/>
        <Route exact path='/users/register' component={Registration}/>
        <Route exact path='/users/login' component={Login}/>

        <Route exact path='/users/dashboard' component={Dashboard}/>
        <Route exact path='/table/id' component={Order}/>


        <PrivateRoute exact path='/users/dashboard' component={Dashboard}/>

      </Switch>
    </>

  );
}

export default App;
