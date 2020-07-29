//Hernandez
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import {UserContext} from '../context/UserContext'


export default function Plant(props){
    const {userInfo} = useContext(UserContext);

    // ,may need to add prop for img from API
    const {plant} = props
    const {plantid, name, water_frequency, species} = plant;

    const deletePlant = () => {
        
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
