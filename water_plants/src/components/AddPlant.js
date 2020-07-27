import React, {useState} from 'react';

const AddPlant = () => {
    const blankFormValues = {
        nickname: '',
        species: '',
        water: ''
    }

    const [formValues, setValues] = useState(blankFormValues);
    const [btnDisabled, setDisabled] = useState(true);

    const changeHandler = event => {

    }

    const submitForm = event => {
        event.preventDefault();
    }

    return(
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
    )
}

export default AddPlant;