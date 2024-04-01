import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT PRODUCTS</h3>
            <h2>Improving lives one sleep at a time</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pulvinar dolor. Praesent suscipit augue est, at scelerisque libero condimentum non. In hac habitasse platea dictumst. Nulla libero nulla, accumsan lobortis tincidunt eu, cursus non diam. Phasellus venenatis nunc sed.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pulvinar dolor. Praesent suscipit augue est, at scelerisque libero condimentum non. In hac habitasse platea dictumst. Nulla libero nulla, accumsan lobortis tincidunt eu, cursus non diam. Phasellus venenatis nunc sed.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pulvinar dolor. Praesent suscipit augue est, at scelerisque libero condimentum non. In hac habitasse platea dictumst. Nulla libero nulla, accumsan lobortis tincidunt eu, cursus non diam. Phasellus venenatis nunc sed.</p>
        </div>
    </div>
  )
}

export default About