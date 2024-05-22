import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePge from "./contianer/home";
import About from "./contianer/about";
import ResumePge from "./contianer/resume";
import MySkillPge from "./contianer/skills";
import PortifoloPage from "./contianer/portifolo";
import ContactPage from "./contianer/contact";
import Particles from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePge />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumePge />} />
        <Route path="/skill" element={<MySkillPge />} />
        <Route path="/portifolo" element={<PortifoloPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
