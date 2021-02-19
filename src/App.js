import {Route} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';


function App ()
{
  return(
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/About-us" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
    </div>
  );
}
export default App;