
import React, {useState, useEffect, useContext} from 'react';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';

//context
// import {UserContext} from '../context/UserContext';

//form schema
import userSchema from '../validation/userSchema';

//styles
import {Errors} from '../styles/AddPlantStyles'

const EditUser = () => {
    const iniitalFormValues = {
        username: '',
        firstname: '',
        lastname: '',
        primaryemail: '',
        phone: ''
    }

    const [formValues, setValues] = useState(iniitalFormValues);
    const [formErrors, setErrors] = useState(iniitalFormValues);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        userSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        Yup 
            .reach(userSchema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...formErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })

        setValues({
            ...formValues,
            [name]: value
        })

    }

    const submitForm = event => {
        event.preventDefault();

        axiosWithAuth()
            .put('', formValues)
            .then(res => {

            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <Errors>
                <p>{formErrors.username}</p>
                <p>{formErrors.firstname}</p>
                <p>{formErrors.lastname}</p>
                <p>{formErrors.primaryemail}</p>
                <p>{formErrors.phone}</p>
            </Errors>
            <form onSubmit={submitForm}>
                <button>Edit Information</button>
            </form>
        </div>
    )
}

export default EditUser;
