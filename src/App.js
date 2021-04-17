import './App.css';
import Header from './Components/header';
import OrderForm from './Components/orderForm'
import React from 'react'
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


const aboutUs = "I am a small local business in Denver Colorado.  Cookies are my passion and I love making unique custom cookie designs.  I take pride in designing and decorating all the creative and wonderfully fun cookie ideas."

const nextSection = "My process starts with consulting with you about the event, look, and feel you would love to eat!  Then I work on a few sketchs of design ideas.  Once the final design has been concocted I mix the dough and cut the cookies by hand.   "

function App() {

  return (
    <div className="App">
      <div className="social-media"><a className="social-media__link" href='https://www.instagram.com/decadent_dough/' target="_blank" rel="noreferrer noopener"><p>Follow us Here:</p> <FaInstagram /></a></div>
      <HeroCarousel />
      <Header />
      {/* <img className="banner-img" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="cookies" /> */}

      <div className="lower-section" >
        <h2 className="title"><span className="title--letter">W</span>elcome to <span className="title--letter">D</span>ecadent <span className="title--letter">D</span>ough</h2>
        <hr className="hr hr__full" style={{ width: '60vw' }} ></hr>
        <div className="main-body">
          {/* <BodySection order={1} title="About Me" description={aboutUs} imageSource={FloralBabyCookies} />
          <BodySection order={2} title="My Process" description={nextSection} imageSource={GreenLingerieCookies} /> */}

          <Router>
            <div className="main-body__displayed" >
              <div className="main-body__displayed--nav" >
                <ul className='ul__nav'>
                  <li><Link to='/' >Home</Link></li>
                  <li><Link to='/order-cookies' >Order Cookies</Link></li>
                  <li><Link to='/price-sheet' >Pricing Sheet</Link></li>
                  <li><Link to='/work' >Previous work</Link></li>
                </ul>
              </div>
              <Switch> 
                <Route exact path='/' component={Home} />
                <Route path='/order-cookies' component={OrderForm} />
                <Route path='/price-sheet' component={PriceSheet} />
                <Route path='/work'  component={() => { }} />
              </Switch>
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
      </div>
    </div>
  );
}


export default App;
