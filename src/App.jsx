import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ingredients from './pages/Ingredients'
import Products from './pages/Products'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>

      <Ingredients/>
      <Products/>
      {/* <Footer/> */}
    </>
  )
}

export default App