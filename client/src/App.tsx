import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { UserContextProvider } from './Context/UserContext';

function App() {
   return (
      <UserContextProvider>
         <BrowserRouter>
            <Routes>
               <Route index element={<Home />} />
               <Route path='/register' element={<Register />} />
               <Route path='*' element={<Home />} />
            </Routes>
         </BrowserRouter>
      </UserContextProvider>
   );
}

export default App;
