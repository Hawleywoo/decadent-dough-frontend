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
import PriceSheet from './Components/priceSheet'
import HeroCarousel from './Components/heroCarousel';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom'
import { AuthProvider } from './Contexts/authContext'


const aboutUs = "this is some stuff about me and how i make awesome cookies and shit. Blah blah blah"

const nextSection = "her is some other stuff that i want here to talk about cookies and some more shit."

function App() {

  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      {/* <img className="banner-img" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="cookies" /> */}
      <h2>Welcome or Something Else</h2>
      <hr className="hr hr__full" style={{ width: '60vw' }} ></hr>
      <div className="main-body">
        <BodySection order={1} title="About Me" description={aboutUs} imageSource="https://annabanana.co/wp-content/uploads/2020/03/Easter-Sugar-Cookies-23.jpg" />
        <BodySection order={2} title="Something Else" description={nextSection} imageSource="https://4.bp.blogspot.com/-SjHtd1ecT1Y/XF8Y8oH-e4I/AAAAAAACv6A/JTUIIk4NqUA2Qb0x8ywOmK75KwA-bUmowCLcBGAs/s1600/Heart%2BShaped%2BLofthouse%2BStyle%2BSugar%2BCookies.jpg" />
        <Router>
          <div>
            <ul className='ul__nav'>
              <li><Link to='/home' >Order Cookies</Link></li>
              <li><Link to='/price_sheet' >Pricing Sheet</Link></li>
              <li><Link to='/work' >Previous work</Link></li>
            </ul>
            <Switch>
              <Route path='/home' exact component={OrderForm} />
              <Route path='/price_sheet' exact component={PriceSheet} />
              <Route path='/work' exact component={() => { }} />
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
  );
}


export default App;
