import '../App.css';
import Lottie from "lottie-react";
import Logo from "../assets/Logo.json";

const Footer = () => {
    return (
        <>
        <div className="footer-container">
        <div className="logo">
            <Lottie animationData={Logo} loop={true} />
        </div>
        <div className="tituloFooter">
        <h1>PhysioTip</h1>
        
        </div>
    </div>
    
    </>
    )
}
export default Footer;