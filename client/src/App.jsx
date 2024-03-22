import { useState } from 'react'

//import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
   <HeroSection/>
   <FeatureSection/>
    </>
 
  )
}

export default App
