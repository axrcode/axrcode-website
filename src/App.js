import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './components/NotFound';

import logo from './assets/img/icons/logo-axrcode.png'

function App() {
  return (
    <div className=" bg-gray-900">
      
      <Navbar logo={logo} />

      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='*' element={<NotFound />} />
      </Routes> 

    </div>
  );
}

export default App;