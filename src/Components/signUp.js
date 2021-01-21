import React from 'react'

let defaultSignUp = {
    userName: '',
    password: ''
}

export default class SignUp extends React.Component{
    state = {
        userName: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
        this.setState({defaultSignUp})
    }

    render(){
        return(
            <form className="signUp" onSubmit={this.handleSubmit} >
                <label>User Name</label>
                <input name="userName"  value={this.state.userName} placeholder="UserName..." onChange={this.handleChange}/>
                <label>Password</label>
                <input name="password" value={this.state.password} type="password"  placeholder="Password..." onChange={this.handleChange} />
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}