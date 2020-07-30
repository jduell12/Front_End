//Hernandez
import React, {useContext, useEffect} from "react";
import Plant from './Plant'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/UserContext';
import {PlantContext} from '../context/PlantContext';

import {
    OuterDiv, StyledTitle2
} from '../styles/AddPlantStyles'

import {StyledBtn} from '../styles/PlantCardStyles';

export default function Plantlanding(){

    const {userInfo, setUserInfo, plantList} = useContext(UserContext);
    const {plants} = userInfo;

    const{setId} = useContext(PlantContext);

    useEffect(() => {
        axiosWithAuth()
        .get('https://watermyplantsdatabase.herokuapp.com/myinfo') 
        .then(res => {
            setUserInfo(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [plantList]);

    return(
        <OuterDiv className='plant-page'>
            <StyledTitle2> Your Plants!</StyledTitle2>
             <Link to="/private/addplant"><StyledBtn>Add Plant </StyledBtn></Link>
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
        </OuterDiv>
    )
}
