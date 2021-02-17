import React , { useRef,useState} from 'react'
import { useAuth } from '../../Contexts/authContext'
import ErrorAlert  from '../errorAlert'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp(){
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signUp } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

        return(
            <div className="card">
                {error && <ErrorAlert error={error} />}
                <form className="signUp" onSubmit={handleSubmit} >
                    <label>Email</label>
                    <input name="email" ref={emailRef}  placeholder="Email"  required/>
                    <label>Password</label>
                    <input name="password" ref={passwordRef}  type="password"  placeholder="Password..."  required/>
                    <label>Confirm Password</label>
                    <input name="passwordConfirm" ref={passwordConfirmRef}  type="password"  placeholder="Confirm Password..."  required/>
                    <input type="submit" disabled={loading} value="Sign Up" />
                </form>
                <div>
                    Have an account? <Link to='/login' > login</Link>
                </div>
            </div>
        )
}