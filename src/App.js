import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contect from './Pages/Contect';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import Malls from './Pages/Malls';
import Nevbar from './Pages/Nevbar';
import ReactGA from 'react-ga';

const Tracking_ID = "UA-254788262-1"
const MeasureMent_Id = "G-34C8J7MP6B"

ReactGA.initialize(MeasureMent_Id);

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
