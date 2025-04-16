import Lottie from "lottie-react";
import animacion3 from "../assets/Animation - 3.json";
const QuienesSomos = () => {
    return (
        <div className="cuerpoQuienes">
        <h3>Sobre Nosotros</h3>
        <div className="barrita">
            <div style= {{ width: 300}}>
                <Lottie animationData={animacion3} loop={true} />
            </div>
            </div>
<div className="recuadro">       
        <h4>Somos un equipo apasionado y multidisciplinario formado por fisioterapeutas, entrenadores y terapeutas expertos en la prevención de lesiones deportivas.

Nuestra experiencia nace del trabajo presencial con personas reales, pero hoy queremos ir más allá: compartir, educar y acompañar también de forma virtual.

Creemos en un enfoque claro, accesible y cercano para que cada persona entienda el origen de sus dolencias y descubra cómo abordarlas desde casa, con autonomía, conciencia y confianza.

Porque cuando entendés tu cuerpo, podés transformarlo</h4>
        </div>
        
        </div>

    )
}

export default QuienesSomos;