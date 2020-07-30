import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialUserValue = {
    username: '',
    firstname: '',
    lastname: '',
    primaryemail: '',
    phone: '',
    password: ''
}


export default function UserProfile() {
    const [user, setUser] = useState(initialUserValue)

    useEffect(() => {
        axiosWithAuth()
        .get('/myinfo')
        .then((resp) => {
            console.log('RESP', resp.data)
            setUser(resp.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteUser = () => {
        
    }
    

    return (
        <div>
            <div>
                <h1>Profile</h1>
                <h2>Username: {user.username}</h2>
                <h2>First Name: {user.firstname}</h2>
                <h2>Last Name: {user.lastname}</h2>
                <p>email: {user.primaryemail}</p>
                <p>phone: {user.phone}</p>
            </div>
            <div>
                <Link to="/private/edituser"><button>Edit User Profile</button></Link>
                <button onClick={() => deleteUser()}>Delete User Profile</button>
            </div>
        </div>
    )
}