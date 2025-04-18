import '../App.css';
import Lottie from "lottie-react";
import Logo from "../assets/Logo.json";

const Footer = () => {
    return (
        <>
        <div className="footer-container">
            <div className='footer-column1'>
        <div className="logo">
            <Lottie animationData={Logo} loop={true} />
            </div> 
        <h1>PhysioTip</h1>
        </div>
        <div className='footer-column2'>
            <h6>Designed and Creatd By</h6>
            <a href='#'>patoare</a>
            </div>
            <div className='footer-column3'>
                <a href='#'>Instagram</a>
                <a href='#'>Linkedin</a>
            </div>
    </div>
    
    </>
    )
}
export default Footer;