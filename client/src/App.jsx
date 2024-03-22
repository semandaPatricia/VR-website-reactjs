import { useState } from 'react'

//import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
   <HeroSection/>
   <FeatureSection/>
   <Workflow/>
    </>
 
  )
}

export default App
