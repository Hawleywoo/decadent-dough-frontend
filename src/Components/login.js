import React from 'react'


export default class Login extends React.Component {

    render(){
        return(
            <div className="admin-login" >
                <input name="login" placeholder="UserName..." />
                <input name="password" type="password"  placeholder="Password..." />
                <input type="submit" />
            </div>
        )
    }
}