//Hernandez
import React from './node_modules/react';

export default function Plant(props){
    // ,may need to add prop for img from API
    const {plant} = props

    return(
        <div className='plant-card'>
            <h3>{plant.name}</h3>
            {/* possibly img from API based on species */}
            <div className='plant-details'>
                <p>{plant.id}</p>
                <p>{plant.frequency}</p>
                <p>{plant.species}</p>
                <p>{plant.lwd}</p>
            </div>
            <div className='buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
        
}