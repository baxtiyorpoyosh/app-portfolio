import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/style.scss';
import HomePages from './pages/HomePages';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        {/* <Route path="/home" exact component={HomePages} /> */}
        <Route path="/" exact component={Banner}  />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path ="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
      {/* <Footer /> */}
      
    </BrowserRouter>
  );
}

export default App;
