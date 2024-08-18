import React from 'react'
import './Hero.css'
import Soma from '../../assets/Soma.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={Soma} alt="" width="500" height="738"/> 
            <h1><span>I am Soma Kiran Sahoo,</span> frontend developer from India</h1>
            <p>A frontend developer is a software engineer who creates the part of a website or app that users interact with directly. They focus on the visual and interactive elements, ensuring it looks good and is easy to use. They use HTML, CSS, and JavaScript to build the user interface and user experience.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero