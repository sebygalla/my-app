import React from 'react'; 
import './App.css';
import Tarea from "./Tarea.js";

function App() {
    return (
      <div className="App">
        <Tarea>
          encargado="VadokDev"
          descripcion="Terminar de grabar el taller"
        </Tarea>         
      </div>
    );
}

export default App;
