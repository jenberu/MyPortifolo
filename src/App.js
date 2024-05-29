import "./App.scss";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import HomePge from "./contianer/home";
import About from "./contianer/about";
import ResumePge from "./contianer/resume";
import MySkillPge from "./contianer/skills";
import PortifoloPage from "./contianer/portifolo";
import ContactPage from "./contianer/contact";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<HomePge />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumePge />} />
        <Route path="/skill" element={<MySkillPge />} />
        <Route path="/portfolo" element={<PortifoloPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
