import React , { useRef,useState} from 'react'
import { useAuth } from '../../Contexts/authContext'
import ErrorAlert  from '../errorAlert'
import { Link, useHistory } from 'react-router-dom'


export default function Login(){
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()

    const history = useHistory()

    const { login } = useAuth()


    const handleChange = (event) => {
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to Login')
        }

        setLoading(false)
    }

        return(
            <div className="card">
                {error && <ErrorAlert error={error} />}
                <form className="signUp" onSubmit={handleSubmit} >
                    <label>Email</label>
                    <input name="email" ref={emailRef}  placeholder="Email" onChange={handleChange} required/>
                    <label>Password</label>
                    <input name="password" ref={passwordRef}  type="password"  placeholder="Password..." onChange={handleChange} required/>
                    <input type="submit" disabled={loading} value="Login" />
                </form>
                <div>
                    <Link to='/forgot-password'> Forgot Password </Link>
                </div>
                <div>
                    Need an account? <Link to='/signup' > Sign Up</Link>
                </div>
            </div>
        )
}