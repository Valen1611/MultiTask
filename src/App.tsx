import React from 'react';
import logo from './logo.svg';
import './App.css';
import Categoria from './components/Categoria';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="App bg-red-300">
      <Categoria nombre="Matematica"/>
      <Categoria nombre="Bases de Datos"/>
      <Categoria nombre="Redes"/>
      <Categoria nombre="Arqui de Software"/>
    </div>
  );
}

export default App;
