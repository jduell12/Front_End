import React from 'react';

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
      <AddPlant />
    </div>
  );
}

export default App;
