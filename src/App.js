import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Fotoer';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Basics from './Pages/Skills/Basics';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Skills" element={<Skills />} >
          <Route path='basics' element={<Basics/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
