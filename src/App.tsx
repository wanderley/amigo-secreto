import { join } from 'path';
import React, { useState } from 'react';
import './App.css';

enum TipoSorteio {
  ALEATORIO,
  CIRCULAR,
  GRUPOS
};

function ParticipantesComponent({ participantes, setParticipantes }: any) {
  const [nome, setNome] = useState("");
  const adiciona = () => {
    setParticipantes([nome, ...participantes]);
    setNome("");
  };
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
        <button onClick={adiciona}>Adicionar</button></p>
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

function sorteioCircular(participantes: any): any {
  if (participantes.length <= 1) {
    return [];
  }
  const resultado = [];
  for (let i = 0; i < participantes.length - 1; i++) {
    resultado.push([participantes[i], participantes[i + 1]]);
  }
  resultado.push([participantes[participantes.length - 1], participantes[0]]);
  return resultado;
}

function sorteioGrupos(participantes: any): any {
const p1 = [];
const p2 = [];
const half = Math.floor(participantes.length / 2);
for (let i = 0 ; i < half; i++) {
  p1.push([participantes[i]]);
};
for (let j = half ; j <= participantes.length - 1; j++) {
  p2.push([participantes[j]]);
};
const resultado = sorteioCircular(p1);
const resultado2 = sorteioCircular(p2);
for (let k = 0; k < resultado2.length; k++) {
  resultado.push(resultado2[k]);
}; 
  return resultado;
}

function SorteioComponent() {
  const [participantes, setParticipantes] = useState(["Leonardo", "Catulo", "Jack", "Ryan"]);
  const [tipoSorteio, setTipoSorteio] = useState(TipoSorteio.GRUPOS);
  const [resultado, setResultado] = useState([]);
  const sortear = () => {
    switch (tipoSorteio) {
      case TipoSorteio.ALEATORIO:
        setResultado(sorteioSimples(participantes));
        break;
      case TipoSorteio.CIRCULAR:
        setResultado(sorteioCircular(participantes));
        break;
      case TipoSorteio.GRUPOS:
        setResultado(sorteioGrupos(participantes));
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