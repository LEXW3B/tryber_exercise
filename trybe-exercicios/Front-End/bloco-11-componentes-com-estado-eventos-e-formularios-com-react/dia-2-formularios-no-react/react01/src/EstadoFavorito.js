import React, { Component } from 'react';

export default class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined
    if (value.length > 120) error = "Texto muito grande!"

    return (
      <div>
        <label>
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea
              name="estadoFavorito"
              value={value}
              onChange={handleChange}
            />
          </label>
          <span>{error ? error : ''}</span>
      </div>
    )
  }
}
