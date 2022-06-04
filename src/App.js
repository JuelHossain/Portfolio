import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Fotoer";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";


import Skills from "./Pages/Skills/Skills";

import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
