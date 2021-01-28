import React , { useRef,useState} from 'react'
import { useAuth } from '../Contexts/authContext'


export default function SignUp(){
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signUp } = useAuth()


    // const handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

        return(
            <form className="signUp" onSubmit={handleSubmit} >
                <label>Email</label>
                <input name="email" ref={emailRef} value={email} placeholder="Email" onChange={this.handleChange}/>
                <label>Password</label>
                <input name="password" ref={passwordRef} value={password} type="password"  placeholder="Password..." onChange={this.handleChange} />
                <input type="submit" disabled={loading} value="Sign Up" />
            </form>
        )
}