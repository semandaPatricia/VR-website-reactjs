import { useState } from 'react'
//import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
   <HeroSection/>
   <FeatureSection/>
   <Workflow/>
   <Pricing/>
    </>
 
  )
}

export default App
