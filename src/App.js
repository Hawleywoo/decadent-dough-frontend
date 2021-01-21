import './App.css';
import Header from './Components/header';
import OrderForm from './Components/orderForm'
import React from 'react'
import BodySection from './Components/bodySection'
import Login from './Components/login'
import OrdersContainer from './Components/ordersContainer'
import SignUp from './Components/signUp'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'


const aboutUs = "this is some stuff about me and how i make awesome cookies and shit. Blah blah blah"

const nextSection = "her is some other stuff that i want here to talk about cookies and some more shit."

class App extends React.Component {

  state = {
    orders: [],
    user: {}
  }

  signUp = (user) =>{
    this.setState({ user })
    // fetch(firebase, {
    //   METHOD: 'POST',
    //   headers:{
    //     'Content-type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify()
    // })
  }

  addOrder = (order) => {
    this.setState({
      user: {},
      orders: [...this.state.orders, order]
    })
  }

  // login = () => {
  //   return fetch(firebase, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({})
  //   })
  // }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <img className="banner-img" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="cookies" />
          <hr></hr>
          <div className="main-body">
            <BodySection order={1} title="About Me" description={aboutUs} imageSource="https://annabanana.co/wp-content/uploads/2020/03/Easter-Sugar-Cookies-23.jpg" />
            <BodySection order={2} title="Something Else" description={nextSection} imageSource="https://4.bp.blogspot.com/-SjHtd1ecT1Y/XF8Y8oH-e4I/AAAAAAACv6A/JTUIIk4NqUA2Qb0x8ywOmK75KwA-bUmowCLcBGAs/s1600/Heart%2BShaped%2BLofthouse%2BStyle%2BSugar%2BCookies.jpg" />
            <div>
              <a>pricing sheet</a>
              <a>order cookies</a>
              <OrderForm addOrder={this.addOrder} />
            </div>

            <Link to="/admin"> Admin </Link >
              <Switch>
                <Route path="/admin">
                  <Login />
                  {this.state.user.userName
                    ? <h2>Welcome {this.state.user.userName}</h2> 
                    : <SignUp signUp={this.signUp}/>  
                  }
                </Route>

              </Switch>
              </div>
      </div>
      </Router>
    );
  }
}

export default App;
