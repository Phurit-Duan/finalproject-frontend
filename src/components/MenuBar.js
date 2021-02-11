import MenuImage from './images/Menu.png';
import  './MenuBar.css';


function MenuBar ()
{
        return(
        <div className="MenuBar">
            <img src={MenuImage} className="MenuImage" alt="MenuImage" />
                <div className="MenuHome">Home</div>
                <div className="MenuAboutUs">About Us</div>
                <div className="MenuContact">Contact</div>
        </div>
        );
    }
export default MenuBar;
