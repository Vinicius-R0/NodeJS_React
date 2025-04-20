import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ListarUsuarios from './pages/Lista';
import EditarUsuarios from './pages/Editar';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listar-usuarios" element={<ListarUsuarios />} />
        <Route path="/editar-usuarios/:id" element={<EditarUsuarios />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
