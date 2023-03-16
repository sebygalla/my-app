/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import './Tarea.css';

function Tarea (props) {
    const [estadoTarea, setEstadoTarea] = useState("Pendiente");

    return(
        <div className="row pt-3 pb-3 mx-auto">
            <div className="block col">
                <img src={"https://api.dicebear.com/5.x/bottts/svg?seed=Felix" + props.persona + ".svg"}/>
            </div>
            <div className="block col">{props.hacer}</div>
            <div className="block col m-auto">{estadoTarea}</div>
            <div className="block col m-auto">
                <button onClick={()=> setEstadoTarea("Terminada")}>Terminar
                </button>
            </div>
        </div> 
    )
}
export default Tarea;