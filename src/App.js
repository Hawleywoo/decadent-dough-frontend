import './App.css';
import Header from './Components/header';
import Footer from './Components/footer'
import OrderForm from './Components/orderForm'
import React, { useEffect } from 'react'
import Home from './Components/home'
import Login from './Components/Authentication/login'
import SignUp from './Components/Authentication/signUp'
import Dashboard from './Components/dashboard'
import PrivateRoute from './Components/Authentication/privateRoute'
import ForgotPassword from './Components/Authentication/forgotPassword'
import UpdateProfile from './Components/Authentication/updateProfile'
import PriceSheet from './Components/priceSheet'
import HeroCarousel from './Components/heroCarousel';
import { FaInstagram } from "react-icons/fa"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom'
import { AuthProvider } from './Contexts/authContext'

function App() {
  useEffect(() => {
    document.title = "Decadent Dough"
  }, []);
  return (
    <div className="App">
      <div className="social-media"><a className="social-media__link" href='https://www.instagram.com/decadent_dough/' target="_blank" rel="noreferrer noopener"><p>Follow us Here:</p> <FaInstagram /></a></div>
      <HeroCarousel />
      <Header />
      <div className="lower-section" >
        <Router>
          <div className="main-body__title--container">
            <h2 className="title"><span className="title--letter">W</span>elcome to <span className="title--letter">D</span>ecadent <span className="title--letter">D</span>ough</h2>
            <div className="main-body__displayed--nav" >
              <ul className='ul__nav'>
                <li><Link className="ul__nav--link" to='/' >Home</Link></li>
                <li><Link className="ul__nav--link" to='/order-cookies' >Order Cookies</Link></li>
                <li><Link className="ul__nav--link" to='/price-sheet' >Pricing Sheet</Link></li>
                <li><Link className="ul__nav--link" to='/faq' >FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="main-body">
            <div className="main-body__displayed" >
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/order-cookies' component={OrderForm} />
                <Route path='/price-sheet' component={PriceSheet} />
                <Route path='/work' component={() => { }} />
                <Route path='/faq' component={() => { }} />
              </Switch>
            </div>
          </div>
        </Router>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <Route path={`/signup`} component={SignUp} />
              <Route path={`/login`} component={Login} />
              <Route path={`/forgot-password`} component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

      <Footer />
    </div>
  );
}


export default App;
