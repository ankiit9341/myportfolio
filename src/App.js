import NavBar from "./component/navBar/NavBar";
import Introduction from "./component/Introduction/Introduction";
import Skills from "./component/Skills/Skillset"
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar />
          <Introduction />
          <About />
           <Skills />
           <Contact />
    </div>
  );
}

export default App;

