import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="todoContainer">
        <ul>
          <li>Todo works!</li>
          <li>Todo works!</li>
          <li>Todo works!</li>
          <li>Todo works!</li>
          <li>Todo works!</li>
          <li>Todo works!</li>
        </ul>
      </div>
    );
  }
}

export default Todo;
