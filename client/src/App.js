import React, { useEffect} from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { Route, Switch, Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './redux/actions';
import {signout} from '../src/redux/actions'
import Register from './pages/Register/Register';
import Loading from './pages/Loading/Loading';
import Home from './pages/Home/Home';
import ManagerDashboard from './pages/ManagerDashboard/ManagerDashboard';


function App() {

  const dispatch = useDispatch()

  const {userInfo, check} = useSelector((state) => state.userSignin)

  const signoutHandler =() => {
    dispatch(signout())}

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])

  if(!check && !userInfo){

    return <Loading/>

  }
else{
  return (
    <>
      {userInfo ? (
      <Link to='/' onClick={signoutHandler}>Sign Out</Link>) : (<Link to='/users/login'>Login</Link>)}


      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/register' component={Register}/>
        <Route exact path='/users/login' component={Login}/>      
        <Route exact path='/table'  component={TableLayout}/>
        <Route exact path='/users/dashboard' component={Dashboard}/>
        <Route exact path='/table/id' component={Order}/>
        <Route exact path='/managerDash' component={ManagerDashboard}/>


        <PrivateRoute exact path='/users/table/:id' component={Order}/>
        <PrivateRoute exact path='/users/dashboard' component={Dashboard}/>
      </Switch>
    </>


  );
}}

export default App;
