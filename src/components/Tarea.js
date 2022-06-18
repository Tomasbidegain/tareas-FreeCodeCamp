import React from "react";
import '../stylesheets/Tareas.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({ id, texto, completada, eliminarTarea, tareaCompletada }) => {
    return(
        <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}
        >
            <div className='tarea-texto'
                onClick={() => tareaCompletada(id)}
            >
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
                onClick = {() => eliminarTarea(id)}
            >
                <AiOutlineCloseCircle 
                    className = "tarea-icono"
                />
            </div>
        </div>
    )
}

export default Tarea;