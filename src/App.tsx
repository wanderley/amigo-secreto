import React, { useState } from 'react';
import './App.css';

enum TipoSorteio {
  ALEATORIO,
  CIRCULAR,
  GRUPOS
};

function ParticipantesComponent({ participantes, setParticipantes }: any) {
  const [nome, setNome] = useState("");
  return (
    <>
      <h1>Participantes</h1>
      <p>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button onClick={() => setParticipantes([nome, ...participantes])}>Adicionar</button></p>
      {
        participantes.map((e: any) => (
          <p>{e} <button>Remover</button></p>
        ))
      }
    </>
  );
}

function TipoSorteioComponent({ tipoSorteio }: any) {
  return (
    <>
      <h1>Tipo do sorteio</h1>
      <select>
        <option selected={tipoSorteio === TipoSorteio.ALEATORIO}>Aleatório</option>
        <option selected={tipoSorteio === TipoSorteio.CIRCULAR}>Circular</option>
        <option selected={tipoSorteio === TipoSorteio.GRUPOS}>Grupos</option>
      </select>
    </>
  )
}

function ResultadoComponent({ resultado }: any) {
  return (
    <>
      <h1>Resultado</h1>
      {
        resultado.map((r: any) => (
          <p><span>{r[0]}</span> {"->"} <span>{r[1]}</span></p>
        ))
      }
    </>
  );
}

function sorteioSimples(participantes: any) {
  const resultado = [];
  for (let i = 0; i < participantes.length; i += 2) {
    resultado.push([participantes[i], participantes[i + 1]]);
  }
  return resultado;
}

function SorteioComponent() {
  const [participantes, setParticipantes] = useState(["Leonardo", "Catulo", "Jack", "Ryan"]);
  const tipoSorteio = TipoSorteio.ALEATORIO;
  const resultado = sorteioSimples(participantes);
  return (
    <div className="App">
      <ParticipantesComponent participantes={participantes} setParticipantes={setParticipantes} />
      <TipoSorteioComponent tipoSorteio={tipoSorteio} />
      <hr />
      <button>Sortear!</button>
      <ResultadoComponent resultado={resultado} />
    </div>
  );
}

export default function App() {
  return <SorteioComponent />;
}
