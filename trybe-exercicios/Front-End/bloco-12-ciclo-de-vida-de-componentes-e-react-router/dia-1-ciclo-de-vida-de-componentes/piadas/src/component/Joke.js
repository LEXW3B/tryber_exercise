import React, { Component } from 'react';

export default class Joke extends Component {
  render() {
    const { jokeObj, saveJoke } = this.props;

    return (
      <div>
        <button type="button" onClick={saveJoke}>
          Salva piada!
        </button>
      </div>
    )
  }
}
