import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ingredients from './pages/Ingredients'
import Products from './pages/Products'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>

      <Ingredients/>
      <Products/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default App