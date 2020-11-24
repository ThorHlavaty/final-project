import Registration from './Registration'
import './App.css';
import Login from './Login';
import {Link, Route, Switch} from 'react-router-dom'
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <Link to='/users/register'>Register</Link>
      <Link to='/users/login'>Login</Link>
      <Link to='/users/dashboard'>Dashboard</Link>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/users/register' component={Registration}/>
        <Route exact path='/users/login' component={Login}/>
        <Route exact path='/users/dashboard' component={Dashboard}/>
      </Switch>
    </>

  );
}

export default App;
