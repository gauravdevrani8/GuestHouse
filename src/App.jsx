import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Rooms from './Pages/Rooms/Rooms';
import Services from './Pages/Services/Services';
import Gallery from './Pages/Gallery/Gallery';
import Header from './Components/Header/Header';
import ContactSection from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <ContactSection/>
      <Footer/>
    </Router>
  );
};

export default App;
