import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, 
         Routes, 
         Route
       } from 'react-router-dom'

import Home from './pages/Home/Home.jsx';
import Renting from './pages/Renting/Renting.jsx';
import About from './pages/About/About.jsx';
import Error from './pages/Error/Error.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import '../src/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <BrowserRouter>

      <Header />
 
      <Routes>
        
          <Route path="/" element={<Home />} />

          <Route path='/Location/:id' element={<Renting />}/>
            
          <Route path='/about' element={<About />}/>
            
          <Route path='*' element={<Error />}/>
            
      </Routes>

      <Footer />

    </BrowserRouter>

  </React.StrictMode>
);