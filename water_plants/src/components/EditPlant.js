import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth'

//context
import {UserContext} from '../context/UserContext';
import {PlantContext} from '../context/PlantContext';

//form schema
import plantSchema from '../validation/addPlantFormSchema';

//styles
import {
    Errors, StyledBtn, StyledForm, StyledInput, StyledLabel, StyledTitle
} from '../styles/AddPlantStyles';


const EditPlant = () => {
    const{plantList} = useContext(UserContext);
    const history = useHistory();

    const initialFormErrors = {
        name: '',
        species: '',
        water_frequency: ''
    }
    const editForm = {
        plantid: '',
        name: '',
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

    useEffect(() => {
        plantList.map(plant => console.log(plant.plants));
        setValues({
            plantid: plantList[0].plants.plantid,
            name: plantList[0].plants.name,
            species: plantList[0].plants.species, 
            water_frequency: plantList[0].plants.water_frequency,
            image: ''
        })
    }, [])

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
            .put('/user/plants', formValues)
            .then(res => {
                console.log(res);
                history.push('/');
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <StyledTitle>Edit {formValues.name} </StyledTitle>
            <Errors>
                <p>{formErrors.name}</p>
                <p>{formErrors.species}</p>
                <p>{formErrors.water_frequency}</p>
            </Errors>
            <StyledForm onSubmit={submitForm}>
                <StyledLabel htmlFor="editname">
                    Name: &nbsp;
                    <StyledInput 
                        id="editname"
                        name = 'name'
                        type="text"
                        value={formValues.name}
                        onChange={changeHandler}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="editSpecies">
                    Species: &nbsp;
                    <StyledInput 
                        id="editSpecies"
                        name = "species"
                        type = 'text'
                        value ={formValues.species}
                        onChange={changeHandler}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="editWater_frequency">
                    Plant Water Frequency: &nbsp;
                    <StyledInput 
                        id="editWater_frequency"
                        name="water_frequency"
                        type="text"
                        value={formValues.water_frequency}
                        onChange={changeHandler}
                    />
                </StyledLabel>
                <StyledBtn id="Submit" disabled={btnDisabled}>Edit Plant</StyledBtn>
            </StyledForm>
        </div>
    )
}

export default EditPlant;