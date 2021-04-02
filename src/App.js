import {Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Detect from "./components/VisionDetect";
import Classify from "./components/VisionClassify";
import ChatbotText from "./components/ChatbotText";
import ChatbotImage from "./components/ChatbotImage";


function App ()
{
  return(
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/About-us" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Chatbot-text-only" component={ChatbotText} />
        <Route path="/Chatbot-text-image" component={ChatbotImage} />
        <Route path="/Image-Classification" component={Classify} />
        <Route path="/Object-Detection" component={Detect} />
    </div>
  );
}
export default App;