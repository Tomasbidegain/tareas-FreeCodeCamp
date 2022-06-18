import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import logo from './images/logo-freecodecamp.png';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={logo}
          alt='Logo FreeCodeCamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
