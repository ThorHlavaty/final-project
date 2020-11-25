import Registration from './Registration'
import './App.css';
import Login from './Login';
import {Link, Route, Switch} from 'react-router-dom'
import Dashboard from './Dashboard';
import Order from './Components/Order/Order';

function App() {
  return (
    <>
      {/* <Link to='/users/register'>Register</Link>
      <Link to='/users/login'>Login</Link>
      <Link to='/users/dashboard'>Dashboard</Link>
      <Link to='/table/id'>Table Test page</Link> */}
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/users/register' component={Registration}/>
        <Route exact path='/users/login' component={Login}/>
        <Route exact path='/users/dashboard' component={Dashboard}/>
        <Route exact path='/table/id' component={Order}/>

      </Switch>
    </>

  );
}

export default App;
