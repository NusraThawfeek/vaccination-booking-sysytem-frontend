import React from 'react'
import image from '../covid.png'
import './Hero.css'

function Hero() {
    return (
     <div>
         <div className='hero-bg'>
         <img className='hero' src={image}/>
         </div>
<div className='hero-text'>
    <h4>Schedule Your COVID-19 Vaccination</h4>
</div>

          </div>  
      
    )
}

export default Hero
