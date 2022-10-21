import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, 
         Routes, 
         Route
       } from 'react-router-dom'

import Home from './pages/Home';
import FicheLogement from './pages/Location';
import APropos from './pages/A_propos';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <BrowserRouter>

      <Header />
 
      <Routes>
        
          <Route path="/" element={<Home />} />

          <Route path='/pages/Location/:id' element={<FicheLogement />}/>
            
          <Route path='/pages/A_propos' element={<APropos />}/>
            
          <Route path='*' element={<Error />}/>
            
      </Routes>

      <Footer />

    </BrowserRouter>

  </React.StrictMode>
);