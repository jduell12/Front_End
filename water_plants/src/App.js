import React, { useEffect, useState } from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom'
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema';
import SignInSide from './material-ui/SignInSide';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {axiosWithAuth} from './utils/axiosWithAuth'

//context
import {UserContext} from './context/UserContext'

//components
import {
  PrivateRoute, AddPlant, EditPlant, EditUser, Register, Plantlanding
} from './components'

//making login screen color theme green
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: pink,
  }
});

function App() {
  //login form stuff
  const initialFormValues = {
    username: "",
    password: ""
  }
  const initialFormErrors = {
    username: "",
    password: ""
  }
  const initialUserValue = []
  const initialDisabled = false

  const [users, setUser] = useState(initialUserValue)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [userInfo, setUserInfo] = useState({});

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const postNewUser = (newUser) => {
    setUser([newUser, ...users])

    axios.post('', newUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally(
        setFormValues(initialFormValues),
        <Redirect to="/plantlanding" />
      )  
  }

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    }, [formValues])
  })



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
        
        <Route exact path='/signin'>
          <ThemeProvider theme={theme} >
            <SignInSide
              submit={submit}
              values={formValues}
              errors={formErrors}
              inputChange={inputChange}
              disabled={disabled}
            />
          </ThemeProvider>
        </Route>

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
