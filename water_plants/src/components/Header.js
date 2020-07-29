import React, { useEffect, useState} from 'react';
import { Switch, Link, useHistory} from 'react-router-dom'





export default function Header(props){

const history = useHistory()
const [currentURL, setCurrentURL] = useState(history.location.pathname)
const [change, setChange] = useState(false)

function refresh(){
    setCurrentURL(history.location.pathname)
}

    return(
        <header>
            <h1>WaterMyPlants</h1>
            <div className='nav-links' onClick={refresh}>
                <a href="https://cranky-hypatia-e034a5.netlify.app/">Home</a>
                {
                    currentURL === '/' && 
                    <Link to='/profile'>Profile</Link>
                }
                {
                    currentURL === '/signin' && 
                    <Link  to='/register'>Register</Link> 
                   
              
                }
                {
                    currentURL === '/profile' &&
                    <Link  to='/'>Profile</Link>
                }
                {
                    currentURL === '/register' &&
                     <Link to ='/signin'>Sign In</Link>
                }
              
            </div>
        </header>
        
    )
}
