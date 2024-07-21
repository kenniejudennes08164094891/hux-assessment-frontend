import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Table from './pages/Table';
import CreateContact from './pages/CreateContact';

function App() {
  return (
   <>
    <div className="container">
    <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/table" element={<Table/>}/>
    <Route path="/new-contact" element={<CreateContact/>}/>
    </Routes>
    </div>
   </>
  );
}

export default App;
