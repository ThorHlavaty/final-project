import React, { useEffect} from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { Route, Switch, Link, Redirect} from 'react-router-dom'
import Dashboard from './Dashboard';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute';
import ManagerPrivateRoute from './Components/ManagerPrivateRoute';
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './redux/actions';
import {signout} from '../src/redux/actions'
import Register from './pages/Register/Register';
import Loading from './pages/Loading/Loading';
import Home from './pages/Home/Home';
import ManagerDashboard from './pages/ManagerDashboard/ManagerDashboard';
import MobileTable from './pages/MobileTable/MobileTable';
import Tables from './Components/Tables';


function App() {

  const dispatch = useDispatch()

  const {userInfo, check} = useSelector((state) => state.userSignin)

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])

  if(!check && !userInfo){

    return <Loading/>

  }
else{
  return (
    <>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users/register' component={Register}/>
        <Route exact path='/users/login' component={Login}/>     
        <PrivateRoute exact path='/users/tables' component={Tables}/>     
        <ManagerPrivateRoute exact path='/managerDash' component={ManagerDashboard}/>

        <PrivateRoute exact path='/users/table/:id' component={Order}/>

      </Switch>
    </>


  );
}}

export default App;
