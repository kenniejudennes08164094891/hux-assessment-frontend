import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Table from './pages/Table';
import CreateContact from './pages/CreateContact';
import LoginPage from './pages/LoginPage';

function App() {
  return (
   <>
    <div className="container">
    <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/table" element={<Table/>}/>
    <Route path="/new-contact" element={<CreateContact/>}/>
    </Routes>
    </div>
   </>
  );
}

//https://github.com/kenniejudennes08164094891/hux-assessment-frontend

export default App;
