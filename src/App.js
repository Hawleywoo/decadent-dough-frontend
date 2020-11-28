import './App.css';
import Header from './Components/header';
import OrderForm from './Components/orderForm'
import React from 'react'
import BodySection from './Components/bodySection'

const aboutUs = "this is some stuff about me and how i make awesome cookies and shit. Blah blah blah"

const nextSection = "her is some other stuff that i want here to talk about cookies and some more shit."

class App extends React.Component {

  state = {
    orders: []
  }

  addOrder = (order) => {
    this.setState({
      orders: [...this.state.orders, order]
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <img className="banner-img" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="cookies" />
        <hr></hr>
        <div clasName="main-body">
          <BodySection order={1} title="About Me" description={aboutUs} imageSource="https://annabanana.co/wp-content/uploads/2020/03/Easter-Sugar-Cookies-23.jpg" />
          <BodySection order={2} title="Something Else" description={nextSection} imageSource="https://4.bp.blogspot.com/-SjHtd1ecT1Y/XF8Y8oH-e4I/AAAAAAACv6A/JTUIIk4NqUA2Qb0x8ywOmK75KwA-bUmowCLcBGAs/s1600/Heart%2BShaped%2BLofthouse%2BStyle%2BSugar%2BCookies.jpg" />
          <OrderForm addOrder={this.addOrder} />
        </div>
      </div>
    );
  }
}

export default App;
