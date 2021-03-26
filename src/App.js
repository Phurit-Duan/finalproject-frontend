import {Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Detect from "./components/VisionDetect";
import Classify from "./components/VisionClassify";
import Chatbots from "./components/Chatbot1";


function App ()
{
  return(
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/About-us" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/NLP-Chatbot" component={Chatbots} />
        <Route path="/Image-Classification" component={Classify} />
        <Route path="/Object-Detection" component={Detect} />
    </div>
  );
}
export default App;