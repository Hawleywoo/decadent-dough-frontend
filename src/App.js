import './App.css';
import Header from './Components/header';
import OrderForm from './Components/orderForm'
import React from 'react'
import BodySection from './Components/bodySection'
import Login from './Components/Authentication/login'
import SignUp from './Components/Authentication/signUp'
import Dashboard from './Components/dashboard'
import PrivateRoute from './Components/Authentication/privateRoute'
import ForgotPassword from './Components/Authentication/forgotPassword'
import UpdateProfile from './Components/Authentication/updateProfile'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { AuthProvider } from './Contexts/authContext'


const aboutUs = "this is some stuff about me and how i make awesome cookies and shit. Blah blah blah"

const nextSection = "her is some other stuff that i want here to talk about cookies and some more shit."

class App extends React.Component {

  state = {
    orders: [],
    user: {}
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


      <div className="App">
        <Header />
        <img className="banner-img" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="cookies" />
        <h2>Welcome or Something Else</h2>
        <hr className="hr hr__full" style={{width:'60vw'}} ></hr>
        <Router>
          <div className="main-body">
            <BodySection order={1} title="About Me" description={aboutUs} imageSource="https://annabanana.co/wp-content/uploads/2020/03/Easter-Sugar-Cookies-23.jpg" />
            <BodySection order={2} title="Something Else" description={nextSection} imageSource="https://4.bp.blogspot.com/-SjHtd1ecT1Y/XF8Y8oH-e4I/AAAAAAACv6A/JTUIIk4NqUA2Qb0x8ywOmK75KwA-bUmowCLcBGAs/s1600/Heart%2BShaped%2BLofthouse%2BStyle%2BSugar%2BCookies.jpg" />
            <div>
              <Link to='/login/order_cookies' >Order Cookies</Link>
              <Link to='/login/order_cookies' >Pricing Sheet</Link>
              <Switch>
                <Route path='/login/order_cookies' component={OrderForm} />
              </Switch>
            </div>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <PrivateRoute path='/update-profile' component={UpdateProfile} />
                <Route path="/signup" component={SignUp} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
