import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Footer from './features/footer/Footer'
import Header from './features/header/Header'
import Main from './features/main/Main'
import TypesProduct from './features/typesProduct/TypesProduct'
import Products from './features/products/Products'
import Cart from './features/cart/Cart'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='3-Frontend-BastionGroup' element={<Main />} />
        <Route path='3-Frontend-BastionGroup/types' element={<TypesProduct />} />
        <Route path='3-Frontend-BastionGroup/products' element={<Products />} />
        <Route path='3-Frontend-BastionGroup/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App