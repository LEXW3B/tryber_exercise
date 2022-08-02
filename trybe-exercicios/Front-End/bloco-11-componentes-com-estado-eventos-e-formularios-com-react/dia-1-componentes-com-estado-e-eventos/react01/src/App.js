import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)

    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    console.log(this);
    return (
      <div>
        <button className='btn' onClick={this.handleClick1} >{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
