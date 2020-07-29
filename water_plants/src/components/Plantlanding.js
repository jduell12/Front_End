//Hernandez
import React, {useState, useContext, useEffect} from "react";
import {Link} from 'react-router-dom';
import Plant from './Plant'
import {AddPlant} from './'

//context for user
import {UserContext} from '../context/UserContext'

export default function Plantlanding(){

    const {userInfo} = useContext(UserContext);
    const {plants} = userInfo;

    return(
        <div className='plant-page'>
            <h2> Your Plants!</h2>
            <Link to="/private/addplant"><button>Add Plant </button></Link>
            {!plants ? <span></span> : 
                (
            <div>
                {
                    !plants.length ? (<span></span>) : (
                        <div className='card-holder'>
                            {
                             plants.map(plant => <Plant key={plant.plants.plantid} plant={plant.plants}/>)
                            }
                        </div>
                    )
                }
            </div>
                )
            }
        </div>
    )
}
