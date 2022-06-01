import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
