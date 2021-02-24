import React, { useState } from 'react'
import ErrorAlert from './errorAlert'
import { Link, useHistory} from 'react-router-dom'
import { useAuth } from '../Contexts/authContext'
import OrdersContainer from './ordersContainer'

export default function Dashboard(){
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div>
            <div>
                <h2>Profile</h2>
                {error && <ErrorAlert error={error} />}
                <span>Email: {currentUser.email}</span>
                <Link to='/update-profile' > Update Profile </Link>
                <Link to='/login' onClick={handleLogout} > Log Out</Link>
                <OrdersContainer />
            </div>
        </div>
    )
}