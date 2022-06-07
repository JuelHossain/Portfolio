import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Fotoer";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";


import Skills from "./Pages/Skills/Skills";

import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Contact from './Pages/Contact/Contact';
import { Toaster } from "react-hot-toast";
import Nav from "./Header/Nav";
import { Center } from "@chakra-ui/react";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 relative">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Center className="sticky bottom-0 bg-zinc-50 dark:bg-zinc-900 p-2 z-40 w-full">
        <Nav small={true} />
      </Center>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
