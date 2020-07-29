import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { ContainerDiv, CardDiv } from '../styles/userprofile-styles'
import styled from 'styled-components'


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


    return (
        <ContainerDiv>
            <CardDiv>
                <h1>Profile</h1>
                <h2>{user.username}</h2>
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>email: {user.primaryemail}</p>
                <p>phone: {user.phone}</p>
                <div>
                    <button>Edit User Profile</button>
                    <button>Delete User Profile</button>
                </div>
            </CardDiv>
        </ContainerDiv>
    )
}