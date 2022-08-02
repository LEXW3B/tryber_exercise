import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const itens = shoppingList.map((shopp, index) => {
      console.log('item: ', shopp);
      return (<li key={ index }>{ shopp }</li>)
    });

    return (
      <div>
        <h1>Lista de compras</h1>

        <ul>{ itens }</ul>
      </div>
    )
  }
}

export default App;