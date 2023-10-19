import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route index element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='*' element={<Home />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
