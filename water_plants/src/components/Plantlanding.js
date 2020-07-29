//Hernandez
import React, {useState, useContext, useEffect} from "react";
import Plant from './Plant'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Switch, Link, Route } from 'react-router-dom'
import {UserContext} from '../context/UserContext';
import {PlantContext} from '../context/PlantContext';

// export default function Plantlanding(props){
//     const [plants, setPlants] = useState([])

    // axiosWithAuth()
    // .get('https://watermyplantsdatabase.herokuapp.com/myinfo') 
    //     .then(res => {
    //         setPlants(res.data)
    //     })
    //     .catch(err => {
    //         debugger
    //         console.log(err)
    //     }, [])

    // return(
    //     <div className='plant-page'>
    //         <h2> Your Plants!</h2>
    //         <button>
    //             <Link to="/private/addplant">Add Plant</Link>   
    //         </button>
    //         <button>
    //             <Link to="/private/user">Profile</Link>   
    //         </button>

    //         <div className='card-holder'>
    //             {
    //                 plants.map(plant =>
    //                     <Plant plant={plant}/>
    //                 )
    //             }
    //         </div>
            
    //     </div>
    // )

    //context for user


export default function Plantlanding(){

    const {userInfo} = useContext(UserContext);
    const {plants} = userInfo;

    const{setId} = useContext(PlantContext);

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
                             plants.map(plant => <Plant key={plant.plants.plantid} plant={plant.plants} setId={setId}/>)
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
