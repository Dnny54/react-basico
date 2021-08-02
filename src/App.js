import React from 'react';
import Info from './components/info';
import Card from './components/card';
import Formulario from './components/formulario';
import logoFb from './components/logoFb.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <img className="logo" src={logoFb} alt="logo" />
      <div className="cuerpo">
        <section>
          <Info />
          <Card />
        </section>
      <Formulario />
      </div>
    </div>
  );
}

export default App;
