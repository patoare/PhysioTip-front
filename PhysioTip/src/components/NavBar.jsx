import '../App.css';
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Logo from "../assets/Logo.json";


const NavBar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo">
                <Lottie animationData={Logo} loop={true} />
            </div>

            <ul className="menuNav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            
        </nav>
    );
};

export default NavBar;
