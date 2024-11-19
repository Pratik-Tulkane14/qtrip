import React from 'react'
import headphone from "/headphone.png";

const Hero = () => {
  return (
    <div className='hero-wrapper'>
    <div className="heading">
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
    </div>
    <div className="headphone-wrapper">
        <img className='headphone-img' src={headphone} alt="headphone-img"/>
    </div>
    </div>
  )
}

export default Hero