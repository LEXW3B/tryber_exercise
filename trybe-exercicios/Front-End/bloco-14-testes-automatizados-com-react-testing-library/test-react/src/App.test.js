import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input de email está na tela', () => {
  //acessar os elementos da tela
  render(<App />)
  
  //interagir com os elementos  (se for necessário)
  const inputEmail = screen.getByLabelText("Email");

  //fazer os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");

});

  //acessar os elementos da tela

  //interagir com os elementos  (se for necessário)

  //fazer os testes