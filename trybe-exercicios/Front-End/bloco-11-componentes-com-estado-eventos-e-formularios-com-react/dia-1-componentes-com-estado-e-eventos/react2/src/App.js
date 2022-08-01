import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      contagemDeNumeros: 0
    }
  }

  handleClick() {
    console.log('clicou!');
    this.setState((numeroAnterior, _props) => ({
      contagemDeNumeros: numeroAnterior.contagemDeNumeros + 1
    }), () => {
      console.log(`Clicou o botão ${this.getButtonColor(this.state.contagemDeNumeros)} vezes.`);
    })
  }

  getButtonColor(num) {
    return num % 2 === 0 ? `green`:`white`;
  }
    
  render() {
    
    return (
      <div>
        <button 
          onClick={this.handleClick} 
          style={{ backgroundColor: this.getButtonColor(this.handleClick) }}>
            {this.state.contagemDeNumeros}
          </button>
      </div>
    )
  }
}

export default App;
