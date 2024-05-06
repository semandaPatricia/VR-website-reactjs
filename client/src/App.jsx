import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/index'
import Pricing from './pages/Pricing';
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Questions from './components/Questions';
import Login from './pages/login/index';
function App() {


  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feature" element={<FeatureSection />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />

        </Routes>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Questions/>
  
   
   <Footer/>
      </Router>
      
   
    </>
 
  )
}

export default App
