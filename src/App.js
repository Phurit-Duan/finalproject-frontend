import {Route} from 'react-router-dom';
import Home from './components/P1_Home';
import AboutUs from './components/P3_AboutUs';
import Contact from './components/P4_Contact';
import Classify from "./components/F1_VisionClassify";
import Detect from "./components/F2_VisionDetect";
import Amulet from "./components/F3_VisionAmulet";
import ChatbotText from "./components/F4_Chatbot_Text";
import ChatbotImage from "./components/F5_Chatbot_Image";
import Developer from "./components/P2_Developer"


function App ()
{
  return(
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/api-for-developer" component={Developer} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/sentiment-chatbot" component={ChatbotText} />
        <Route path="/inclusive-chatbot" component={ChatbotImage} />
        <Route path="/bakery-classification" component={Classify} />
        <Route path="/thai-banknotes-detection" component={Detect} />
        <Route path="/buddhist-amulet-classification" component={Amulet} />
    </div>
  );
}
export default App;