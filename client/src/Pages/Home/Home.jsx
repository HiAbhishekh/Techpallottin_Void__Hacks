import React from 'react'
import Category from '../../components/Category/Category'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/Products/Products'
import Slider from '../../components/Slider/Slider'
import Devices from '../../Devices/Devices'
import Process from '../../components/Category/Process/Process'

const Home = () => {
  return (
    <div className='Home'>
        {/* <Navbar /> */}
     <hr/>
      <Category/>
      <hr/>
      <Slider/>
      <Products />
      <Devices />
      <Process />
    </div>
  )
}

export default Home