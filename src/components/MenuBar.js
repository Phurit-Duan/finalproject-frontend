import { Link } from "react-router-dom";
import MenuImage from './images/Menu.png';
import MenuImage_H from './images/Menu_H.png';
import './MenuBar.css';


function MenuBar() {
    return (
        <div className="Container">
            <label className="MenuBar"></label>
            <Link to="/">
                <img src={MenuImage} className="MenuImage" alt="MenuImage" 
                onMouseOver={(e) => (e.currentTarget.src = MenuImage_H)}
                onMouseOut={(e) => (e.currentTarget.src = MenuImage)} />
                <p className="MenuHome">Home</p>
            </Link>
            <Link to="//api-for-developer">
                <p className="MenuDevelope">API</p>
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
