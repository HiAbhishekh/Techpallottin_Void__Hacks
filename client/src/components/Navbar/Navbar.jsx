import React from 'react'
import "./Navbar.css"
import { UilSearch } from '@iconscout/react-unicons'
import Logo from '../../img/logon.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="Left-side">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className='Search'>
            <input type="text" placeholder='Search...' className='Search-bar'/>
            <button className='s-icon'><UilSearch/></button>
          </div>
        </div>
        <div className="Right-side">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <div className="Registration">
            {/* <button className='button signup'>Sign Up</button> */}
            <button className='button signin'>Sign In</button>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar