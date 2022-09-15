import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Productsj from './Component/Productsj'
import Product from './Product'
import Cart from './Component/Cart'
import Signup from './Component/Signup'
import MSignin from './Component/MSignin.jsx'



function Srouter() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product' element={<Product />} />
    <Route path='/product/:id' element={<Productsj />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/signin' element={<MSignin />} />
   
    </Routes>
    </>
  )
}

export default Srouter