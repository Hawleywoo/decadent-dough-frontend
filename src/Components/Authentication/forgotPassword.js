import React , { useRef,useState} from 'react'
import { useAuth } from '../../Contexts/authContext'
import ErrorAlert  from '../errorAlert'
import { Link, useHistory } from 'react-router-dom'


export default function ForgotPassword(){
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const emailRef = useRef()

    const { resetPassword } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true) 
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for futher instructions.')
        } catch {
            setError('Failed to reset password.')
        }

        setLoading(false)
    }

        return(
            <div className="card">
                {error && <ErrorAlert error={error} />}
                {message && <ErrorAlert error={message} />}
                <form className="signUp" onSubmit={handleSubmit} >
                    <label>Email</label>
                    <input name="email" ref={emailRef}  placeholder="Email"  required/>
                    <input type="submit" disabled={loading} value="Reset Password" />
                </form>
                <Link to='/login' > Login </Link>
                <div>
                    Need an account? <Link to='/signup' > Sign Up</Link>
                </div>
            </div>
        )
}