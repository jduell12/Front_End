import React, { useEffect, useState} from 'react';
import { Link, useHistory} from 'react-router-dom'

import {
    StyledDiv, StyledBtn, StyledHeader
} from '../styles/HeaderStyles'


export default function Header(props){

const {logout} = props

const history = useHistory()
const [currentURL, setCurrentURL] = useState(history.location.pathname)
const [prevURL, setPrevURL] = useState('')

function refresh(){
    setCurrentURL(history.location.pathname)
}

useEffect(() => {
    refresh()
  },[logout])

    return(
        <StyledHeader>
            <h1 style={{color: 'black'}}>WaterMyPlants</h1>
            <StyledDiv className='nav-links' onClick={refresh}>
                <Link to="/">Home</Link>
                {
                    currentURL === '/' ? (
                        <>
                            <Link to='/private/user'>User Profile</Link>
                            <StyledBtn onClick={() => logout()}>Logout</StyledBtn>
                        </>
                    ) : <></>
                    
                }  
                {
                     currentURL === '/signin'&& 
                    <Link to='/register'>Register</Link> 
                }
                {
                    currentURL === '/private/user' ? (
                        <>
                            <Link  to='/'>Plant Dashboard</Link> 
                            <StyledBtn onClick={() => logout()}>Logout</StyledBtn>
                        </>
                    ) : <></>
                }
                {
                    currentURL === '/register' &&
                     <Link to ='/signin'>Sign In</Link>
                }
              
            </StyledDiv>
        </StyledHeader>
        
    )
}
