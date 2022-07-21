import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
    );
  }

const array = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ array.map(arr => Task(arr)) }</ul>
    );
  }
}

export default App;
