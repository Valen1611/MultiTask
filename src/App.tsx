import React from 'react';
import logo from './logo.svg';
import './App.css';
import Categoria from './components/Categoria';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className='flex flex-row flex-grow'>
        <Categoria nombre="Matematica" descripcion='calculadora de derivadas: https://www.calculadora-de-derivadas.com/' tareas={["guia derivadas", "guia integrales", "limites"]}/>
        <Categoria nombre="Bases de Datos"/>
        <Categoria nombre="Redes"/>
        <Categoria nombre="Arqui de Software" tareas={["leer roy fielding", "aprender REST", "aprender QAs"]} />
        <Categoria nombre="Arqui de Software 2"/>
      </div>
    </div>
  );
}

export default App;
