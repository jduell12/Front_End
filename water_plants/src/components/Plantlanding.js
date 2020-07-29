//Hernandez
import React, {useState, useEffect} from "react";
import Plant from './Plant'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Switch, Link, Route } from 'react-router-dom'

export default function Plantlanding(props){
    const [plants, setPlants] = useState([])

    axiosWithAuth()
    .get('https://watermyplantsdatabase.herokuapp.com/myinfo') 
        .then(res => {
            setPlants(res.data)
        })
        .catch(err => {
            debugger
            console.log(err)
        }, [])

    return(
        <div className='plant-page'>
            <h2> Your Plants!</h2>
            <button>
                <Link to="/private/addplant">Add Plant</Link>   
            </button>

            {/* <div className='card-holder'>
                {
                    plants.map(plant =>
                        <Plant plant={plant}/>
                    )
                }
            </div> */}
            
        </div>
    )
}
