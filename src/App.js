import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Fotoer";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Basics from "./Pages/Skills/Development/Child/Basics";
import Frameworks from "./Pages/Skills/Development/Child/Frameworks";

import Skills from "./Pages/Skills/Skills";
import ReactTools from "./Pages/Skills/Development/Child/ReactTools";
import Other from "./Pages/Skills/Development/Child/Other";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />}>
          <Route path="development/basics" element={<Basics />} />
          <Route path="development/frameworks" element={<Frameworks />} />
          <Route path="development/tools" element={<ReactTools />} />
          <Route path="others" element={<Other />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
