import React from 'react'

export default class SignUp {
    state = {
        userName: '',
        password: '',
    }
    render(){
        return(
            <form className="signUp" >
                <label>User Name</label>
                <input name="userName"  value={this.state.userName} placeholder="UserName..." onChange={() =>{}}/>
                <label>Password</label>
                <input name="password" value={this.state.password} type="password"  placeholder="Password..." onChange={() =>{}} />
                <input type="submit" onSubmit={() => {}} />
            </form>
        )
    }
}