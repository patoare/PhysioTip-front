import '../App.css';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <ul className="menuNav">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to ='/contact'>Contact</Link>
            </li>
        </ul>
        </>
    )
}

export default NavBar;