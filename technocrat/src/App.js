import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Solutions from "./Components/Solutions";
import ThoughtCenter from "./Components/ThoughtCenter";
import Contact from "./Components/Contact";
import Joinus from "./Components/Joinus";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import  Style from './Components/';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/experties" exact component={Expertise}/>
        <Route path="/solutions" exact component={Solutions}/>
        <Route path="/thoughcenter" exact component={ThoughtCenter}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/joinus " exact component={Joinus}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
