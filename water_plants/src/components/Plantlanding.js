//Hernandez
import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import Plant from './Plant'
import {AddPlant} from './'

//context for user
import {UserContext} from '../context/UserContext'

export default function Plantlanding(){

    const {userInfo} = useContext(UserContext);
    const {plants} = userInfo;

    const [plantList, setPlants] = useState(userInfo[plants]);

    return(
        <div className='plant-page'>
            <h2> Your Plants!</h2>
            <Link to="/private/addplant"><button>Add Plant </button></Link>
            {!plantList ? <span></span> : 
                (
            <div>
                {
                    !plantList.length ? (<span></span>) : (
                        <div className='card-holder'>
                            {
                             plantList.map(plant => <Plant plant={plant}/>)
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
