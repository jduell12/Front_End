import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import schema from './validation/formSchema';
import SignInSide from './material-ui/SignInSide';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//components
import {PrivateRoute, AddPlant} from './components'

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
    email: "",
    password: ""
  }
  const initialFormErrors = {
    email: "",
    password: ""
  }
  const initialUserValue = []
  const initialDisabled = false

  const [users, setUser] = useState(initialUserValue)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

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
    setFormValues(initialFormValues)
    console.log(users)
  }

  const submit = () => {
    const newUser = {
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    }, [formValues])
  })
  return (
    <div className="App">
      {/*
        <PrivateRoute exact path = "/private/userplant" component ={} />
        <PrivateRoute exact path = "/private/user" component ={} />
        <PrivateRoute exact path = "/private/edituser" component ={} />
        <PrivateRoute exact path = "/private/editplant" component ={} />
      */}
      <ThemeProvider theme={theme} >
        <SignInSide
          submit={submit}
          values={formValues}
          errors={formErrors}
          inputChange={inputChange}
          disabled={disabled}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
