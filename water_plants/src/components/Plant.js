//Hernandez
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {axiosWithAuth} from '../utils/axiosWithAuth'

import {UserContext} from '../context/UserContext';

export default function Plant(props){
    const {plantList, setPlants} = useContext(UserContext);
    // ,may need to add prop for img from API
    const {plant} = props
    const {plantid, name, water_frequency, species} = plant;

    const deletePlant = () => {
        axiosWithAuth()
            .delete(`/plants/${plantid}`)
            .then(res => {
                const newList = plantList.filter(plant => plant.plants.plantid !== plantid);
                setPlants(newList);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className='plant-card'>
            <h3>{name}</h3>
         
            {/* possibly img from API based on species */}
            <div className='plant-details'>
                {/* <p>{plant.id}</p> */}
                <p>{water_frequency}</p>
                <p>{species}</p>
                {/* <p>{plant.lwd}</p> */}
            </div>
            <div className='buttons'>
                <button>
                <Link to="/private/editplant">Edit</Link>   
                </button>
                <button onClick={deletePlant}>Delete</button>
            </div>
           
        </div>
    )
        
}
