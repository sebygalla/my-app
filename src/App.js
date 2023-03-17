import React from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/NavBar.js'
import UncontrolledExample from './components/carousel';
import GridExample from './components/cards';


function App() {
    return (
      <div className="App">
      
        {/*barra de navegacion */}
        <Barra/>
        {/*carrousel de imagenes */}
        <UncontrolledExample/>

        <GridExample/>
 

    

      </div>
    );
}

export default App;
