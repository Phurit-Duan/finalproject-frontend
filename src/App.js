import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Home from './components/Home'
import AboutUs from './components/AboutUs'

function App ()
{
  return(
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
    </div>
  );
}
export default App;