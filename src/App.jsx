import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ingredients from './pages/Ingredients'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Popular from './pages/Popular'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import LoadingWrapper from './components/LoadingWrapper'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <>
      <LoadingWrapper>
        <Navbar />
        <Home />
        <About />
        <Popular />
        <Ingredients />
        <Products />
        <Contact />
        <Footer />
      </LoadingWrapper>
    </>
  )
}

export default App