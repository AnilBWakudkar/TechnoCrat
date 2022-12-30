import Home from "./Components/Home";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Solutions from  "./Components/Solutions";
import ThoughtCenter from "./Components/ThoughtCenter";
import Contact from "./Components/Contact";
import Joinus from "./Components/Joinus";
import{Routes,Route} from "react-router-dom"; 
import  Style from './Components/';

function App() {
  return (
    <div className="App">
      
      <Home/>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about"  element={<About/>} />




      </Routes>
    </div>
  );
}

export default App;
