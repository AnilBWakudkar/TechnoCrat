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
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">

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
      </Switch>
    </div>
  );
}

export default App;
