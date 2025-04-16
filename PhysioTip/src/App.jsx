import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Cuerpo from './components/Cuerpo';
import Card from './components/Card';
import foto1 from './assets/foto1.jpg';
import espalda from './assets/Espalda.jpg';
import postura from './assets/Postura.jpg';
import cabeza from './assets/Cabeza.jpg';
import futbolista from './assets/Futbolista.jpg';
import maratonista from './assets/Maratonista.jpg';
import rodilla from './assets/Rodilla.jpg';
import preQx from './assets/Preqx.jpg';
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
     image={espalda}
     title="Consejos para tu Espalda"
     text="Ejercicios simples para aliviar el dolor lumbar."
     buttonText="Ver más"
     link="#"
     />
     <Card
        image={postura}
        title="Existe la Postura Correcta?"
        text="Tips para mantener una postura saludable durante el día."
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={cabeza}
        title="Dolores de cabeza, por que y como tratarlos?"
        text="Ejercicios y autotratamiento"
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={futbolista}
        title="Prevencion de lesiones para futbolistas amateurs"
        text="Prepará tu cuerpo: ejercicios clave para empezar tu entrenamiento sin lesiones."
        buttonText="Aprender"
        link="#"
      />
      <Card
        image={maratonista}
        title="Prevencion de lesiones para corredores amateurs"
        text=<p><strong>Guia basica de ejercicios + Info importante</strong>  previo al aumento de la carga</p>
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={rodilla}
        title="Dolor en la rodilla, puntos clave para un primer diagnostico"
        text= <p><strong>¿Dónde duele? ¿Cuándo aparece el dolor? </strong>
Registrá los síntomas para entender mejor qué te pasa.</p>
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={preQx}
        title="Lesion que necesita cirugia, que puedo hacer previo a la operacion?"
        text="Trabajo Prequirurgico, tu mejor aliado"
        buttonText="Aprender"
        link="#"
      />
       <Card
        image={foto1}
        title="Ejercicios funcionales para el adulto mayor"
        text="Tips para mantenerte activo y trabajar en tu salud y bienestar."
        buttonText="Aprender"
        link="#"
      />
      </div>
      <QuienesSomos/>
      <Footer/>
    </>
  )
}

export default App
