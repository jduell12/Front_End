//Hernandez
import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import {axiosWithAuth} from '../utils/axiosWithAuth'

import {UserContext} from '../context/UserContext';
import {PlantContext} from '../context/PlantContext';

import {
    StyledCard, StyledDetails, StyledBtn
} from '../styles/PlantCardStyles'

export default function Plant(props){
    const {plantList, setPlants} = useContext(UserContext);
    const {plantId, setId} = useContext(PlantContext);
    // ,may need to add prop for img from API
    const {plant} = props
    const {plantid, name, water_frequency, species} = plant;
    const history = useHistory();

    const deletePlant = () => {
        axiosWithAuth()
            .delete(`/plants/${plantid}`)
            .then(res => {
                getData();
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getData = () => {
        axiosWithAuth()
            .get('https://watermyplantsdatabase.herokuapp.com/myinfo') 
            .then(res => {
                setPlants(res.data.plants);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const editPlant = () => {
        setId(plantid);
        history.push(`/private/editplant`);
    }

    return(
        <StyledCard className='plant-card'>
            <h3> {name}</h3>

         
            {/* possibly img from API based on species */}
            <div className='plant-details'>
                <StyledDetails> {species}</StyledDetails>
                <StyledDetails> {water_frequency}</StyledDetails>
            </div>
            <div className='buttons'>
                <StyledBtn onClick={() => editPlant()}>
                Edit  
                </StyledBtn>
                <StyledBtn onClick={() => deletePlant()}>Delete</StyledBtn>
            </div>
           
        </StyledCard>
    )
        
}
