import React from 'react'
import './App.css';
import Header from './componentes/Header';
import Corpo from './componentes/Corpo';
import Dados from './componentes/Dados';
import Relogio from './componentes/Relogio';


export default function App() {
  return (
    <>
    <Relogio/>
    <Header/>
    <Corpo/>
    <Dados nome='Hugo'/>
    </>
    
  )
}


