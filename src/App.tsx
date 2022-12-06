import React from 'react';
import './App.css';

enum TipoSorteio {
  ALEATORIO,
  CIRCULAR,
  GRUPOS
};

function ParticipantesComponent({participantes}: any) {
  return (
    <>
      <h1>Participantes</h1>
      <p><input type="text" /><button>Adicionar</button></p>
      {
        participantes.map((e: any) => (
          <p>{e} <button>Remover</button></p>
        ))
      }
    </>
  );
}

function TipoSorteioComponent({tipoSorteio}: any) {
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

function ResultadoComponent({resultado}: any) {
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

function SorteioComponent() {
  const participantes = ["Leonardo", "Catulo", "Jack", "Ryan"];
  const tipoSorteio = TipoSorteio.ALEATORIO;
  const resultado = [["Leonardo", "Catulo"], ["Jack", "Ryan"]];
  return (
    <div className="App">
      <ParticipantesComponent participantes={participantes} />
      <TipoSorteioComponent tipoSorteio={tipoSorteio}/>
      <hr />
      <button>Sortear!</button>
      <ResultadoComponent resultado={resultado}/>
    </div>
  );
}

export default function App() {
  return <SorteioComponent />;
}
