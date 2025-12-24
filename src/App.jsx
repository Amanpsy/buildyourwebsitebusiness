import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom'
import Background from './components/GlobalBackground';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Background>
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <Contact />
        <Footer />
      </Background>
    </BrowserRouter>
  )
}

export default App
