import React, { useState } from "react";
import FormularioTarea from './FormularioTarea';
import Tarea from  './Tarea';

const ListaDeTareas = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.length !== 0){
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } 
  }

  const eliminarTarea = (id) => {
    const actualizarTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(actualizarTareas);
  }

  const tareaCompletada = (id) => {
    const actualizarTareas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(actualizarTareas);
  }

  return(
    <>
      <FormularioTarea
        onSubmit={agregarTarea}
      />
      <div className='tareas-lista-contenedor'>
          {tareas.map((tarea) => 
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea = {eliminarTarea}
                tareaCompletada = {tareaCompletada}
              />
          )}
      </div>
    </>
  )
}

export default ListaDeTareas;