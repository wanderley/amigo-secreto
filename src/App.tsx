import React from 'react';
import './App.css';

function Menu() {
  return (
    <div className="App">
      <button>Aleatório</button>
      <button>Circular</button>
      <button>Grupos</button>
    </div>
  );
}

export default function App() {
  return <Menu />;
}
