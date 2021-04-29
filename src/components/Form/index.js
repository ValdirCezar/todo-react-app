import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Form.css'
import Todo from '../Todo';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tarefa: '',
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(event) {
    let state = this.state;

    if (this.state.tarefa !== '') {
      let newItem = {
        text: this.state.tarefa,
        key: Date.now()
      }
      state.items.push(newItem)
      this.setState(state)
    }
    event.preventDefault();
    this.setState({ tarefa: '' });
  }

  deleteItem(key) {
    let filto = this.state.items.filter((item) => {
      return (item.key !== key);
    })

    this.setState({ items: filto })
  }

  render() {
    return (
      <div className="container">

        <h1>Lista de tarefas</h1>
        <form>
          <TextField
            value={this.state.tarefa}
            name="tarefa"
            onChange={(event) => this.setState({ tarefa: event.target.value })}

            // Material-ui
            id="standard-full-width"
            label="Todo"
            placeholder="Criar novo Todo"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button onClick={this.addItem} variant="outlined" color="primary"> Adicionar </Button>

        <Todo items={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default Form;
