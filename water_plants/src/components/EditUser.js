
import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';

//context
import {UserContext} from '../context/UserContext';

//form schema
import userSchema from '../validation/userSchema';

//styles
import {Errors} from '../styles/AddPlantStyles'

const EditUser = () => {
    const {userInfo, setUserInfo} = useContext(UserContext);
    const history = useHistory();

    const initialFormErrors = {
            username: '',
            firstname: '',
            lastname: '',
            primaryemail: '',
            phone: ''
    }

    const iniitalFormValues = {
        username: userInfo.username,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        primaryemail: userInfo.primaryemail,
        phone: userInfo.phone
    }

    const [formValues, setValues] = useState(iniitalFormValues);
    const [formErrors, setErrors] = useState(initialFormErrors);
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

        setUserInfo({
            ...userInfo,
            [name]: value
        })

    }

    const submitForm = event => {
        event.preventDefault();

        axiosWithAuth()
            .put(`user/${userInfo.userid}`, userInfo)
            .then(res => {
                console.log(res);
                history.push('/private/user');
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
                <label htmlFor="editUsername">
                    Username: &nbsp;
                    <input 
                        id="editUsername"
                        name="username"
                        type="text"
                        onChange={changeHandler}
                        value={formValues.username}
                    />
                </label>
                <label htmlFor="editFirt">
                    First Name: &nbsp;
                    <input 
                        id="editFirst"
                        name="firstname"
                        type="text"
                        onChange={changeHandler}
                        value={formValues.firstname}
                    />
                </label>
                <label htmlFor="editLast">
                    Last Name: &nbsp;
                    <input 
                        id="editLast"
                        name="lastname"
                        type="text"
                        onChange={changeHandler}
                        value={formValues.lastname} 
                    />
                </label>
                <label htmlFor="editEmail">
                    Email: &nbsp;
                    <input 
                        id="editEmail"
                        name="primaryemail"
                        type="primaryemail"
                        onChange={changeHandler}
                        value={formValues.primaryemail}
                    />
                </label>
                <label htmlFor="editPhone">
                    Phone: &nbsp;
                    <input 
                        id="editPhone"
                        name="phone"
                        type="text"
                        onChange={changeHandler}
                        value={formValues.phone} 
                    />
                </label>
                <button id="editUserBtn" disabled={disabled}>Edit Information</button>
            </form>
        </div>
    )
}

export default EditUser;
