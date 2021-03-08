import { Link } from "react-router-dom";
import MenuImage from './images/Menu.png';
import './MenuBar.css';


function MenuBar() {
    return (
        <div className="Container">
            <label className="MenuBar"></label>
            <img src={MenuImage} className="MenuImage" alt="MenuImage" />
            <Link to="/">
                <div className="MenuHome">Home</div>
            </Link>
            <Link to="/About-us">
                <div className="MenuAboutUs">About Us</div>
            </Link>
            <Link to="/Contact">
                <div className="MenuContact">Contact</div>
            </Link>
        </div>
    );
}
export default MenuBar;
