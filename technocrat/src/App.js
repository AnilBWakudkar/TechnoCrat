import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Solutions from "./Components/Solutions";
import ThoughtCenter from "./Components/ThoughtCenter";
import Contact from "./Components/Contact";
import Joinus from "./Components/Joinus";
<<<<<<< HEAD
import{Route, Switch} from "react-router-dom"; 
import  Style from './Components/';
=======
import { Switch, Route, Redirect } from "react-router-dom";
>>>>>>> 05532a985f0e0bff00e7eff184f551a780c67c1e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
      <Home/>
      <Switch>
      <Route path="/" exact component={<Home/>} />
      <Route path="/about"  component={<About/>} />
      <Route path="/expertise"  component={<Expertise/>} />
      <Route path="/solutions"  component={<Solutions/>} />
      <Route path="/thoughtcenter"  component={<ThoughtCenter/>} />
      <Route path="/contact"  component={<Contact/>} />
      <Route path="/joinus"  component={<Joinus/>} />




=======

      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/experties"  component={Expertise}/>
        <Route path="/solutions"  component={Solutions}/>
        <Route path="/thoughcenter"  component={ThoughtCenter}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/joinus "  component={Joinus}/>
        <Redirect to="/" />
>>>>>>> 05532a985f0e0bff00e7eff184f551a780c67c1e
      </Switch>
    </div>
  );
}

export default App;
