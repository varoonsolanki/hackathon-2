import React from 'react'
import Shop from './components/Shop'
import Product from './components/Product'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Pages from './components/Pages'
 

const page = () => {
  return (
  <div>
    
     <Shop/>
     <Product/>
    <Pages />
     <Home/>
     <Contact/>
     <Blog/>
     <Footer/>
  </div>
  )
}

export default page



