import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">

        <TextField
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
        <Button variant="outlined" color="primary"> Adicionar </Button>
      </div>
    );
  }
}

export default Form;
