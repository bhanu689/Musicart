import React from 'react'
import './Navbar.css';  // Adjust path as needed
import { PiPhoneCall } from "react-icons/pi";

function Navbar() {
  return (
    <div>
        <div className="nav">
            <span className='first'>
            <PiPhoneCall  size={30}/>
                <p>1234567890</p>
            </span>
            <span className='sec'>
                <p>Get 50% off on selected items</p>
                <p>|</p>
                <p>Shop now</p>
            </span>
            <span className='third'>
                <p>Login</p>
                <p>|</p>
                <p>Signup</p>
            </span>
        </div>
        
    </div>
  )
}

export default Navbar