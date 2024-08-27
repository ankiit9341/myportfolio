import NavBar from "./component/navBar/NavBar";
import Introduction from "./component/Introduction/Introduction";
import Skills from "./component/Skills/Skillset"
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Project from "./component/Project/Project";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{backgroundColor:'#5C8374'}}>
        <NavBar />
          <Introduction />
          <About />
          <Project/>
           <Skills />
           <Contact /> 
    </div>
  );
}

export default App;

