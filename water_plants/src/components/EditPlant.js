import React, {useState, useEffect, useContext} from './node_modules/react';
import * as Yup from './node_modules/yup';
import {axiosWithAuth} from '../utils/axiosWithAuth'

//context
import {PlantContext} from '../context/PlantContext'

//form schema
import plantSchema from '../validation/addPlantFormSchema';

//styles
import {Errors} from '../styles/AddPlantStyles'


const EditPlant = () => {
    //context to grab plant information to populate form 
    const initialFormErrors = {
        name: '',
        species: '',
        water_frequency: ''
    }

    const editForm = {
        name: '', //will get from context,
        species: '', 
        water_frequency: '',
        image: ''
    }

    const[formErrors, setErrors] = useState(initialFormErrors);
    const [formValues, setValues] = useState(editForm); 
    const [btnDisabled, setDisabled] = useState(true);

    useEffect(() => {
        plantSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    })

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        //validate form values with YUP
        Yup
            .reach(plantSchema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...setErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    ...setErrors,
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
                //get updated plant information
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Edit Your Plant </h1>
            <Errors>
                <p>{formErrors.name}</p>
                <p>{formErrors.species}</p>
                <p>{formErrors.water_frequency}</p>
            </Errors>
            <form onSubmit={submitForm}>
                <label htmlFor="editname">
                    name: &nbsp;
                    <input 
                        id="editname"
                        name = 'name'
                        type="text"
                        value={formValues.name}
                        onChange={changeHandler}
                    />
                </label>
                <label htmlFor="editSpecies">
                    Species: &nbsp;
                    <input 
                        id="editSpecies"
                        name = "species"
                        type = 'text'
                        value ={formValues.species}
                        onChange={changeHandler}
                    />
                </label>
                <label htmlFor="editWater_frequency">
                    Plant Water Frequency: &nbsp;
                    <input 
                        id="editWater_frequency"
                        name="water_frequency"
                        type="text"
                        value={formValues.water_frequency}
                        onChange={changeHandler}
                    />
                </label>
                <button id="edit" disabled={btnDisabled}>Edit Plant</button>
            </form>
        </div>
    )
}

export default EditPlant;