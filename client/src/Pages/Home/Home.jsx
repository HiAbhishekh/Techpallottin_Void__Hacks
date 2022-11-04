import React from 'react'
import Category from '../../components/Category/Category'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
     <hr/>
      <Category/>
      <hr/>
      <Slider/>
      <Products />
    </div>
  )
}

export default Home