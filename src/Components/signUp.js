import React from 'react'

export default class SignUp {
    render(){
        return(
            <form className="signUp" >
                <input name="login" placeholder="UserName..." />
                <input name="password" type="password"  placeholder="Password..." />
                <input type="submit" />
            </form>
        )
    }
}