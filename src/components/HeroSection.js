//rfce => creaton of this method automatically 
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myvideo from  '../videos/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
           <video src={myvideo} autoPlay loop muted />
           <h1>SPECIALIZED IN INTERLOOCK</h1>
           <p>What are you waiting for?</p>
           <div className="hero-btns">
               <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Get Started
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                Make a quote today <i className='far fa-play-circle' />
                </Button>

           </div>
        </div>
    )
}

export default HeroSection
