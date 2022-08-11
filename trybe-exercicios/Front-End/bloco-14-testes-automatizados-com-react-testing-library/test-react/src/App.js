import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state= {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className='App'>
        <label htmlFor="id-email">
          Email
          <input
            type="email"
            id="id-email" 
            value={ email }
            onChange={ (e) => this.changeEmail(e.target.value) } 
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn=id" type="button" value="Voltar" />
        <h2 data-tesid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    ) ;
  }
}
