import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'GIT', 'GITHUB', 'JEST'];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);

    return (
      <div>
        <h1>
          {'Alexandre E. S. L.'}
        </h1>
        <p>
          {'Olá, sou um estudante fullstack da Trybe que já ultrapassou o módulo de fundamentos, e atualmente estou estudando React em Front-End.'}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    )
  }
}

export default About;