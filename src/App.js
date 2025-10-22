import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./contianer/home";

import NavBar from "./components/navBar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
