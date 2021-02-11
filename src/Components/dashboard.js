import React, { useState } from 'react'
import ErrorAlert from './errorAlert'
import { Link } from 'react-router-dom'
import { useAuth, logout } from '../Contexts/authContext'

export default function Dashboard(){
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    
    const handleLogout = () => {

    }

    return (
        <div>
            <div>
                <h2>Profile</h2>
                {error && <ErrorAlert error={error} />}
                <span>Email: {currentUser.email}</span>
                <Link to='/update-profile' > Update Profile </Link>
                <Link to='/signup' onClick={handleLogout} > Log Out</Link>
            </div>
        </div>
    )
}