//Hernandez
import React from 'react'

export default function Register(props){
    // Props passed in from apps for use in page functions
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props

    // prevents page from reloading & calls submit function from App.js
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      // pulls name and value from event target. Passthrough to inputChange in App.js
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }


    // build elements for form/ inputs for first name, last name, email, phone number, and password
    return(
       
        <div className='registration'>
            <h2>Join WaterMyPlants Today!</h2>
            <div className='errors-container'>
                <div>{errors.firstname}</div>
                <div>{errors.lastname}</div>
                <div>{errors.email}</div>
                <div>{errors.phone}</div>
                <div>{errors.password}</div>
            </div>

            <form>
                <label>First Name:&nbsp;
                    <input 
                        value={values.firstname}
                        onChange={onInputChange} // checkes
                        placeholder='First Name'
                        maxlength='14'
                        name='firstname'
                        type='text'
                    />

                </label>
                <label>Last Name: &nbsp;
                    <input 
                        value={values.lastname}
                        onChange={onInputChange}
                        placeholder='Last Name'
                        maxlength='14'
                        name='lastname'
                        type='text'
                    />
                </label>
                <label>E-Mail: &nbsp;
                    <input 
                        value={values.email}
                        onChange={onInputChange}
                        placeholder='E-mail'
                        maxlength='14'
                        name='email'
                        type='email'
                    />
                </label>
                <label>Phone Number: &nbsp;
                    <input 
                        value={values.phone}
                        onChange={onInputChange}
                        placeholder='Phone Number'
                        maxlength='14'
                        name='phone'
                        type='text'
                    />
                </label>
                <label>Password &nbsp;
                    <input 
                        value={values.password}
                        onChange={onInputChange}
                        placeholder='Password'
                        maxlength='14'
                        name='password'
                        type='text'
                    />
                </label>
                <button /*disabled={disabled}*/ >Submit</button>
            </form>
        </div>
    )
}
