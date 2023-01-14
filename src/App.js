import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contect from './Pages/Contect';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import Malls from './Pages/Malls';
import Nevbar from './Pages/Nevbar';

function App() {
  return (
    <BrowserRouter>
    <Nevbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='hotels' element={<Hotel />} />
    <Route path='malls' element={<Malls />} />
    <Route path='contect' element={<Contect />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
