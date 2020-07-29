import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import SignInSide from './material-ui/SignInSide';

import {axiosWithAuth} from './utils/axiosWithAuth'

//context
import {UserContext} from './context/UserContext'

//components
import {
  PrivateRoute, AddPlant, EditPlant, EditUser, Register, Plantlanding
} from './components'

function App() {
  const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axiosWithAuth()
            .get('https://watermyplantsdatabase.herokuapp.com/myinfo') 
            .then(res => {
                setUserInfo(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []); 

  return (
    <div className="App">
      <div className='nav-links'>
        <a href="https://cranky-hypatia-e034a5.netlify.app/">Home</a>
        <Link to='/register'>Register</Link>
      </div>

      {/* Switch for endpoints */}
      <Switch>

        <Route exact path='/register' component={Register}/>
          {/* <Register inputChange={inputChange}/> */}
        
        <UserContext.Provider>
          <Route exact path='/signin'  component={SignInSide}/>
        </UserContext.Provider>
          

        <UserContext.Provider value={{userInfo}}>
          <PrivateRoute exact path ="/" component={Plantlanding} />
          {/* <PrivateRoute exact path = "/private/user" component={} /> */}
          <PrivateRoute exact path ="/private/edituser" component={EditUser} />
          <PrivateRoute exact path ="/private/editplant" component={EditPlant} />
          <PrivateRoute exact path = "/private/addplant" component={AddPlant} />
        </UserContext.Provider>

      </Switch>
    </div>
  );
}

export default App;
