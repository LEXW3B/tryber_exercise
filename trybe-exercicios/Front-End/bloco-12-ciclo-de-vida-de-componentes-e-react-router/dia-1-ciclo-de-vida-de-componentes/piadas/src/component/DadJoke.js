import React, { Component } from 'react';
import Joke from './Joke';

export default class DadJoke extends Component {
  constructor() {
    super();

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  //toda vez que trabalha com api tem que fazer uma função fetch, depois de declarar o caminho da api tem que declarar o await e na frente da função o async, no final pra atualizar a api tem que fazer o this.setState;

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const requestHeaders = { Headers: { Accept: 'application/json'} }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,
        });
      }
    )  
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //aqui é onde salva a piada no array de piadas storedJokes.
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          { storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>)) }
        </span>

        {
          //lógica...
          loading ? loadingElement : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
        } 

      </div>
    )
  }
}
