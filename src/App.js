import React from 'react';
import '../src/styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar
  from './components/NavBar';
import AppRouter from './components/AppRouter';
import ButtonUI from './components/UI/button/ButtonUI';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter >
    
  )
}

export default App;

