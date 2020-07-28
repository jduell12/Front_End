//Hernandez
import React, {useState, useEffect} from "react";
import Plant from './Plant'
import axios from 'axios';
// import { Switch, Link, Route } from 'react-router-dom' //temp


export default function Plantlanding(props){
    const [plants, setPlants] = useState([])

    axios.get('url')
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

            <div className='card-holder'>
                {
                    plants.map(plant =>
                        <Plant plant={plant}/>
                    )
                }
            </div>
            
        </div>
    )
}
