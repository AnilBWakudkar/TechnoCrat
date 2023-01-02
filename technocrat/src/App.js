import Home from "./Components/Home";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Solutions from  "./Components/Solutions";
import ThoughtCenter from "./Components/ThoughtCenter";
import Contact from "./Components/Contact";
import Joinus from "./Components/Joinus";
import{Route, Switch} from "react-router-dom"; 
import  Style from './Components/';

function App() {
  return (
    <div className="App">
      
      <Home/>
      <Switch>
      <Route path="/" exact component={<Home/>} />
      <Route path="/about"  component={<About/>} />
      <Route path="/expertise"  component={<Expertise/>} />
      <Route path="/solutions"  component={<Solutions/>} />
      <Route path="/thoughtcenter"  component={<ThoughtCenter/>} />
      <Route path="/contact"  component={<Contact/>} />
      <Route path="/joinus"  component={<Joinus/>} />




      </Switch>
    </div>
  );
}

export default App;
