import React from 'react'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
   
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>

    </Routes>
    </>
    
  )
}

export default App