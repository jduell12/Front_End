import React, {useState} from 'react';

const AddPlant = () => {
    const blankFormValues = {
        nickname: '',
        species: '',
        waterFreq: ''
    }

    const [formValues, setValues] = useState(blankFormValues);
    const [btnDisabled, setDisabled] = useState(true);

    const changeHandler = event => {

    }

    const submitForm = event => {
        event.preventDefault();
    }

    return(
        <form>
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
        </form>
    )
}

export default AddPlant;