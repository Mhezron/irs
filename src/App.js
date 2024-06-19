import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useRef } from 'react';
import { Home } from './Pages/Home';

function App() {
  const ref = useRef(null);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

