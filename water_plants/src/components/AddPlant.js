import React, {useState, useEffect} from './node_modules/react';
import * as Yup from './node_modules/yup';

//formSchema
import formSchema from '../validation/addPlantFormSchema';

//styles
import {Errors} from '../styles/AddPlantStyles'

const AddPlant = () => {
    const initialFormValues = {
        nickname: '',
        species: '',
        water: ''
    }

    const initialErrorValues = {
        nickname: '',
        species: '',
        water: ''
    }

    const [formValues, setValues] = useState(initialFormValues);
    const [errorValues, setErrors] = useState(initialErrorValues);
    const [btnDisabled, setDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        //validate form values with YUP
        Yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...errorValues,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...errorValues,
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
    }

    return(
      <div>
        <Errors>
            <p>{errorValues.nickname}</p>
            <p>{errorValues.species}</p>
            <p>{errorValues.water}</p>
        </Errors>
        <form onSubmit={submitForm}>
            <label htmlFor='nickname'>
                Plant Nickname: &nbsp;
                <input 
                    id='nickname'
                    name='nickname'
                    type='text'
                    onChange={changeHandler}
                    value={formValues.nickname}
                />
            </label>
            <label htmlFor="species">
                Plant Species: &nbsp;
                <input 
                    id='species'
                    name='species'
                    type='text'
                    onChange={changeHandler}
                    value={formValues.species}
                />
            </label>
            <label htmlFor='water'>
                Plant Water Frequency: &nbsp;
                <input 
                    id='water'
                    name='water'
                    type='text'
                    onChange={changeHandler}
                    value={formValues.water}
                />
            </label>
            <button id="submit" disabled={btnDisabled}>Add Plant</button>
        </form>
      </div>
    )
}

export default AddPlant;