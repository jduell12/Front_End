import React, { useState } from 'react'

const initialUserValue = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''
}


export default function UserProfile() {
    const [user, setUser] = useState(initialUserValue)
    return (
        <div>
            <div>
                <h1>Profile</h1>
                <h2>Username</h2>
                <h2>First Name</h2>
                <h2>Last Name</h2>
                <p>email</p>
                <p>phone</p>
            </div>
            <div>
                <button>Edit User Profile</button>
            </div>
        </div>
    )
}