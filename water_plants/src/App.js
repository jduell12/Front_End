import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'

//components
import {PrivateRoute, AddPlant} from './components'




function App() {
  return (
    <div className="App">
      {/*
        <PrivateRoute exact path = "/private/userplant" component ={} />
        <PrivateRoute exact path = "/private/user" component ={} />
        <PrivateRoute exact path = "/private/edituser" component ={} />
        <PrivateRoute exact path = "/private/editplant" component ={} />
      */}
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link> 
      </div>
    
    {/* Switch for endpoints */}
      <Switch path='/addplant'>
        <Route>
          <AddPlant/>
        </Route>
        <Route path='/plantlanding'>
          {/* <Plantlanding /> */}
        </Route>

        <Route path='/register'>
          {/* <Register/> */}
        </Route>

        <Route path='/'>
          {/* < /> Home component?*/}
        </Route>
      </Switch>

    </div>
  );
}

export default App;
