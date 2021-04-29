import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import './Todo.css'

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    return (
      <div className="todoContainer">
        <ul>
          {this.props.items.map((item) => {
            return (
              <div>
                <Typography onClick={() => this.delete(item.key)} key={item.key} variant="h6">{item.text}</Typography>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
