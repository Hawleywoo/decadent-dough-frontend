import './App.css';
import Header from './Components/header';
import OrderForm from './Components/orderForm'
import React from 'react'

class App extends React.Component {

  state = {
    orders: []
  }

  addOrder = () => {
    
  }

  render(){
    return (
      <div className="App">
        <Header />
        <OrderForm addOrder={this.addOrder} />
      </div>
    );
  }
}

export default App;
