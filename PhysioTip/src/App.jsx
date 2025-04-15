import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Cuerpo from './components/Cuerpo';
import Card from './components/Card';
import foto1 from './assets/foto1.jpg'
import { Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Cuerpo/>
    <div className="d-flex gap-5 flex-wrap p-4 my-card-container">
     <Card
     image={foto1}
     title="Consejo de Espalda"
     text="Ejercicios simples para aliviar el dolor lumbar."
     buttonText="Ver más"
     link="#"
     />
     <Card
        image={foto1}
        title="Postura Correcta"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Postura Correcta"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Postura Correcta"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
      </div>
    </>
  )
}

export default App
