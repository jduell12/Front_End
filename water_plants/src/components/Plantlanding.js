//Hernandez
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Plant from './Plant'
import {AddPlant} from './'
import {axiosWithAuth} from '../utils/axiosWithAuth'


//context for user
import {UserContext} from '../context/UserContext'

export default function Plantlanding(props){

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://watermyplantsdatabase.herokuapp.com/myinfo') 
            .then(res => {
                setPlants(res.data.plants)
            })
            .catch(err => {
                console.log(err)
            })
    }, []); 

   

    return(
        <div className='plant-page'>
            <h2> Your Plants!</h2>
            
            <Link to="/private/addplant"><button>Add Plant </button></Link>
            <div>
                {
                    !plants.length ? (<span></span>) : (
                        <div className='card-holder'>
                            {
                             plants.map(plant => <Plant plant={plant}/>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
