import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/authContext'
import ErrorAlert from './errorAlert'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { currentUser, updatePassword, updateEmail } = useAuth()
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        setError('')

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        const promises = []
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(()=> {
                history.push('/')
            }).catch(() => {
                setError('Failed to update account')
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="card">
            {error && <ErrorAlert error={error} />}
            <form className="signUp" onSubmit={handleSubmit} >
                <label>Email</label>
                <input name="email" ref={emailRef} placeholder="Email" defaultValue={currentUser.email} required />
                <label>Password</label>
                <input name="password" ref={passwordRef} type="password" placeholder="Leave blank to keep the same password."  />
                <label>Confirm Password</label>
                <input name="passwordConfirm" ref={passwordConfirmRef} type="password" placeholder="Leave blank to keep the same password."  />
                <input type="submit" disabled={loading} value="Sign Up" />
            </form>
            <div>
                <Link to='/' > Cancel </Link>
            </div>
        </div>
    )
}