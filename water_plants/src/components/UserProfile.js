import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {
    Card, StyledDetails, StyledTitle, StyledBtn
} from '../styles/userprofile-styles'


import { UserContext } from '../context/UserContext'


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
    const { userInfo } = useContext(UserContext);
    const history = useHistory();
    
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
        axiosWithAuth()
            .delete(`/user/${userInfo.userid}`)
            .then(res => {
                console.log(res);
                localStorage.clear();
                history.push('/');
            })
            .catch(err => console.log(err))
    }


    return (

        <Card >
            <StyledTitle>{user.username}</StyledTitle>
            <StyledDetails>First Name: {user.firstname}</StyledDetails>
            <StyledDetails>Last Name: {user.lastname}</StyledDetails>
            <StyledDetails>email: {user.primaryemail}</StyledDetails>
            <StyledDetails>phone: {user.phone}</StyledDetails>

            <div>
                <Link to="/private/edituser"><StyledBtn>Edit User Profile</StyledBtn></Link>
                <StyledBtn onClick={() => deleteUser()}>Delete User Profile</StyledBtn>
            </div>
        </Card>
    )
}