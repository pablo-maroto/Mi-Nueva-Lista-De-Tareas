import React from 'react';
import './App.css';
import todolist2 from './imagenes/to-do-list-2.jpg';
import Contenedor from './componentes/contenedor';

function App() {
  return (
    <header >
  <img src={todolist2} className='logoFondo' alt="logo" />
     <div className='contenedor' >
        <Contenedor></Contenedor>
     </div>
     </header>
  );
}

export default App;

