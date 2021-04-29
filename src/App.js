import React, { Component } from 'react'
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
