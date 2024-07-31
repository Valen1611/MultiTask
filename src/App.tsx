import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'tailwindcss/tailwind.css';
import Navbar from './components/Sidebar';
import { List } from '@material-tailwind/react';
import { ListasPage } from './pages/Listas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CalendarioPage } from './pages/Calendario';
import { ConfiguracionPage } from './pages/Configuracion';
import { EditarCategoriasPage } from './pages/EditarCategorias';
import { AccountPage } from './pages/AccountPage';



function App() {


  return (
    <div className="">
      <BrowserRouter> 
        <Navbar>
          <Routes>
            <Route path="/todo" element={<ListasPage />} />
            <Route path="/calendar" element={<CalendarioPage />} />
            <Route path="/edit" element={<EditarCategoriasPage />} />
            <Route path="/settings" element={<ConfiguracionPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}




export default App;
