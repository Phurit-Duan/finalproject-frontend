import {Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Detect from './components/Detect';
import Result from './components/Result';
import Chatbot from './components/Chatbot';


function App ()
{
  return(
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/About-us" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Detect-Object" component={Detect} />
        <Route path="/Result" component={Result} />
        <Route path="/Chatbot" component={Chatbot} />
    </div>
  );
}
export default App;