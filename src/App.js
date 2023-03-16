import React from 'react'; 
import './App.css';
import Tarea from "./components/Tarea.js";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';

import { Button } from 'react-bootstrap'
import Barra from './components/NavBar.js'
import UncontrolledExample from './components/carousel';


function App() {
    return (
      <div className="App">

        <Barra/>

        <UncontrolledExample/>

        <Tarea>
          persona="VadokDev"
          hacer="Terminar de grabar el taller"
        </Tarea>  

        <div className='col pt-5 pb-5 mt-5 mb-5'>
          
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button>{' '}
          <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>


        <Barra/>




      </div>
    );
}

export default App;
