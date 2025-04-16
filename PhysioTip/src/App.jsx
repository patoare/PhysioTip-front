import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Cuerpo from './components/Cuerpo';
import Card from './components/Card';
import foto1 from './assets/foto1.jpg';
import AnimacionLottie from './components/AnimacionLottie';
import QuienesSomos from './components/QuienesSomos';
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
    <AnimacionLottie />
    <div className="d-flex gap-5 flex-wrap p-4 my-card-container">
     <Card
     image={foto1}
     title="Consejos para tu Espalda"
     text="Ejercicios simples para aliviar el dolor lumbar."
     buttonText="Ver más"
     link="#"
     />
     <Card
        image={foto1}
        title="Existe la Postura Correcta?"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Dolores de cabeza, por que y como tratarlos?"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Prevencion de lesiones para futbolistas amateurs"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
      <Card
        image={foto1}
        title="Prevencion de lesiones para corredores amateurs"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Dolores de cabeza, por que y como tratarlos?"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Dolores de cabeza, por que y como tratarlos?"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Dolores de cabeza, por que y como tratarlos?"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
      </div>
      <QuienesSomos/>
    </>
  )
}

export default App
