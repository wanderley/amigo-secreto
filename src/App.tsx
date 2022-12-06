import React from 'react';
import './App.css';

function Participantes() {
  return (
    <>
      <h1>Participantes</h1>
      <p><input type="text" /><button>Adicionar</button></p>
      <p>Leonardo <button>Remover</button></p>
      <p>Catulo <button>Remover</button></p>
      <p>Jack <button>Remover</button></p>
      <p>Ryan <button>Remover</button></p>
      <p>Moises <button>Remover</button></p>
    </>
  );
}

function TipoSorteio() {
  return (
    <>
      <h1>Tipo do sorteio</h1>
      <select>
        <option>Aleatório</option>
        <option>Circular</option>
        <option>Grupos</option>
      </select>
    </>
  )
}

function Resultado() {
  return (
    <>
      <h1>Resultado</h1>
      <table>
        <tr><td>Leonardo</td><td>Catulo</td></tr>
        <tr><td>Jack</td><td>Ryan</td></tr>
      </table>
    </>
  );
}

function Sorteio() {
  return (
    <div className="App">
      <Participantes />
      <TipoSorteio />
      <hr />
      <button>Sortear!</button>
      <Resultado />
    </div>
  );
}

export default function App() {
  return <Sorteio />;
}
