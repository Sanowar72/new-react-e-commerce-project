import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Productsj from './Component/Productsj'
import Product from './Product'
import Cart from './Component/Cart'



function Srouter() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product' element={<Product />} />
    <Route path='/product/:id' element={<Productsj />} />
    <Route path='/cart' element={<Cart />} />
   
    </Routes>
    </>
  )
}

export default Srouter