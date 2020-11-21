//Hernandez
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
  Errors,
} from "../styles/AddPlantStyles";

const initialFormValues = {
  firstname: "",
  lastname: "",
  primaryemail: "",
  username: "",
  password: "",
  phone: "",
};

const initialFormErrors = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  phone: "",
};

// const initialUser = []
const initialDisabled = true;

export default function Register(props) {
  // Props passed in from apps for use in page functions

  const { history } = props;

  // const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const formSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("First Name is Required"),
    lastname: yup.string().min(4, "Last Name must be at least 4 characters"),
    primaryemail: yup
      .string()
      .required()
      .min(8, "E-mail must be at least 8 characters"),
    username: yup
      .string()
      .required()
      .min(5, "Username must be at least 5 characters"),
    password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password must contain at least 8 characters"),
    phone: yup
      .string()
      .required("Phone Number is Required")
      .min(10, "Phone Number must contain 10 characters"),
    // .max((10, 'Phone Number must contain 10 characters'))
  });

  // prevents page from reloading & calls submit function from App.js
  const postNewUser = (newUser) => {
    axios
      .post(
        "https://watermyplantsdatabase.herokuapp.com/createnewuser",
        newUser,
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        // const
        console.log(err);
      })
      .finally(setFormValues(initialFormValues), history.push("/"));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const submit = () => {
    const newUser = {
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      primaryemail: formValues.primaryemail.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      phone: formValues.phone.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  // pulls name and value from event target. Passthrough to inputChange
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  // second half of StyledInput change
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        console.log(name);
        setFormErrors({
          ...formErrors,
          [name]: err.errors,
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // build elements for form/ inputs for first name, last name, email, phone number, and password
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Join WaterMyPlants Today!</h2>
      <Errors className="errors-container">
        <div>{formErrors.firstname}</div>
        <div>{formErrors.lastname}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.phone}</div>
        <div>{formErrors.password}</div>
        {/* <div>{Email already taken}</div> */}
      </Errors>
      <StyledLabel>
        First Name:&nbsp;
        <StyledInput
          value={formValues.firstname}
          onChange={onInputChange} // checkes
          placeholder="First Name"
          maxLength="14"
          name="firstname"
          type="text"
        />
      </StyledLabel>
      <StyledLabel>
        Last Name: &nbsp;
        <StyledInput
          value={formValues.lastname}
          onChange={onInputChange}
          placeholder="Last Name"
          name="lastname"
          type="text"
        />
      </StyledLabel>
      <StyledLabel>
        E-Mail: &nbsp;
        <StyledInput
          value={formValues.primaryemail}
          onChange={onInputChange}
          placeholder="E-mail"
          name="primaryemail"
          type="email"
        />
      </StyledLabel>
      <StyledLabel>
        Phone Number: &nbsp;
        <StyledInput
          value={formValues.phone}
          onChange={onInputChange}
          placeholder="Phone Number"
          name="phone"
          type="text"
        />
      </StyledLabel>
      <StyledLabel>
        Username &nbsp;
        <StyledInput
          value={formValues.username}
          onChange={onInputChange}
          placeholder="Username"
          name="username"
          type="text"
        />
      </StyledLabel>
      <StyledLabel>
        Password &nbsp;
        <StyledInput
          value={formValues.password}
          onChange={onInputChange}
          placeholder="Password"
          name="password"
          type="text"
        />
      </StyledLabel>
      <StyledBtn disabled={disabled}>Submit</StyledBtn>
    </StyledForm>
  );
}
