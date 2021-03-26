import { Link } from "react-router-dom";
import MenuImage from './images/Menu.png';
import './MenuBar.css';


function MenuBar() {
    return (
        <div className="Container">
            <label className="MenuBar"></label>
            <img src={MenuImage} className="MenuImage" alt="MenuImage" />
            <Link to="/">
                <p className="MenuHome">Home</p>
            </Link>
            <Link to="/About-us">
                <p className="MenuAboutUs">About Us</p>
            </Link>
            <Link to="/Contact">
                <p className="MenuContact">Contact</p>
            </Link>
        </div>
    );
}
export default MenuBar;
