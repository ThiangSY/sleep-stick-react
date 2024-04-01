import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis metus vel tellus luctus, in ornare lectus blandit. Phasellus congue pulvinar velit, quis ornare ante euismod eu. Phasellus eu tempus nibh. Etiam at feugiat mauris, in condimentum ipsum. Integer tempus porttitor turpis, eget ullamcorper ex placerat eget. Sed quis lobortis.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero