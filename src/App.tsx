import React, { useState } from 'react';
import './App.css';

enum TipoSorteio {
  ALEATORIO,
  CIRCULAR,
  GRUPOS
};

function ParticipantesComponent({ participantes, setParticipantes }: any) {
  const [nome, setNome] = useState("");
  const remove = (i: any) => {
    const resultado = [];
    for (let j = 0; j < participantes.length; j++) {
      if (j !== i) {
        resultado.push(participantes[j]);
      }
    }
    setParticipantes(resultado);
  };
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
        participantes.map((e: any, i: any) => (
          <p>{e} <button onClick={() => remove(i)}>Remover</button></p>
        ))
      }
    </>
  );
}

function TipoSorteioComponent({ tipoSorteio, setTipoSorteio }: any) {
  return (
    <>
      <h1>Tipo do sorteio</h1>
      <select defaultValue={tipoSorteio}>
        <option value={TipoSorteio.ALEATORIO} onClick={() => setTipoSorteio(TipoSorteio.ALEATORIO)}>Aleatório</option>
        <option value={TipoSorteio.CIRCULAR} onClick={() => setTipoSorteio(TipoSorteio.CIRCULAR)}>Circular</option>
        <option value={TipoSorteio.GRUPOS} onClick={() => setTipoSorteio(TipoSorteio.GRUPOS)}>Grupos</option>
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

function sorteioSimples(participantes: any): any {
  const resultado = [];
  for (let i = 0; i < participantes.length; i += 2) {
    resultado.push([participantes[i], participantes[i + 1]]);
  }
  return resultado;
}

function SorteioComponent() {
  const [participantes, setParticipantes] = useState(["Leonardo", "Catulo", "Jack", "Ryan"]);
  const [tipoSorteio, setTipoSorteio] = useState(TipoSorteio.ALEATORIO);
  const [resultado, setResultado] = useState([]);
  const sortear = () => {
    switch(tipoSorteio){
      case TipoSorteio.ALEATORIO:
      case TipoSorteio.CIRCULAR:
      case TipoSorteio.GRUPOS:
        setResultado(sorteioSimples(participantes));
    }
  };
  return (
    <div className="App">
      <ParticipantesComponent participantes={participantes} setParticipantes={setParticipantes} />
      <TipoSorteioComponent tipoSorteio={tipoSorteio} setTipoSorteio={setTipoSorteio} />
      <hr />
      <button onClick={sortear}>Sortear!</button>
      <ResultadoComponent resultado={resultado} />
    </div>
  );
}

export default function App() {
  return <SorteioComponent />;
}
