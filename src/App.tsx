import React from 'react';
import './App.css';
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
