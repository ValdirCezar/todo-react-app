import React, { Component } from 'react'
import Form from './components/Form';
import Todo from './components/Todo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form/>
        <Todo/>
      </div>
    );
  }
}

export default App;
