import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Fotoer";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";

import Skills from "./Pages/Skills/Skills";

import { Center } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./Header/Nav";
import { updateStatus } from "./Hooks/Helper/Admin";
import About from "./Pages/About/About";
import Login from "./Pages/Admin/Login";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
function App() {
  const queryClient = new QueryClient();
  const session = sessionStorage.getItem("admin");
  !session && updateStatus(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900 text-gray-800 dark:text-zinc-200 relative px-2">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/maintenance" element={<Login />} />
        </Routes>
        <Center className="sticky bottom-0 bg-zinc-50 dark:bg-zinc-900 p-2 z-40 w-full">
          <Nav small={true} />
        </Center>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
