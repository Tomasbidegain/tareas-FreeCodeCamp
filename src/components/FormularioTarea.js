import React, { useState } from "react";
import '../stylesheets/FormularioTarea.css';
import { v4 as uuidv4 } from 'uuid';

const FormularioTarea = ( { onSubmit }) => {

  const [input, setInput] = useState('')

  const manejarCambios = (e) => {
    setInput(e.target.value);
  }

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    onSubmit(nuevaTarea);
  }

  return(
    <form
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input
        className='tarea-input'
        type='text'
        placeholder="Escriba una tarea"
        name='text'
        onChange={manejarCambios}
      />
      <button
        className='tarea-boton'
      >Agregar tarea</button>
    </form>
  )
}

export default FormularioTarea;