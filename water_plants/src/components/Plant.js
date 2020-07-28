//Hernandez
import React, { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom'


export default function Plant(props){

    // const delete = () =>{

    // }
    // ,may need to add prop for img from API
    const {plant} = props

    return(
        <div className='plant-card'>
            <h3>{plant.name}</h3>
            <button>
                <Link to="/private/addplant">Add Plant</Link>   
            </button>
         
            {/* possibly img from API based on species */}
            <div className='plant-details'>
                <p>{plant.id}</p>
                <p>{plant.frequency}</p>
                <p>{plant.species}</p>
                <p>{plant.lwd}</p>
            </div>
            <div className='buttons'>
                <button>
                <Link to="/private/editplant">Edit</Link>   
                </button>
                {/* <button onclick={delete}>Delete</button> */}
            </div>
           
        </div>
    )
        
}
