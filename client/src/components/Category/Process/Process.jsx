import React from 'react'

import "./Process.css"
const Process = () => {
  return (
    <div className='Process'>
        <div className="process-h">

            <h1>Sell Your Gadget in 3 Steps</h1>
            <p>Book a free pickup from your home or work at a time slot as per your convenience</p>
        </div>
        <div className="process-c">
            <div className='div1'>
                <h1>Check Price</h1>
                <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
            </div>
            <div className='div2'>
                <h1>Schedule Pickup</h1>
                <p>Book a free pickup from your home or work at a time slot as per your convenience</p>
            </div>
            <div className='div3'>
                <h1>Get paid instantly</h1>
                <p>Did we mention you get paid as soon as our executive picks up your device? Its instant & secure payment all the way!</p>
            </div>
        </div>
    </div>
  )
}

export default Process