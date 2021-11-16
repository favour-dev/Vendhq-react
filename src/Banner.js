import React from 'react';
import Home from './images/vend-homepage-2.jpg';
import './Banner.css';
const Banner = () => (
    <div>
        <div className='banner'>
            <div>
                 <img src={Home} className="App-home" alt="home" />
            </div>
            <div  className='desktop'>
                <DesktopUpgrade />
            </div>
        </div>
            <Upgrade/>
            <Optimise/>
    </div>
)
const Upgrade = () => (
        <div className="upgrade">
            <h1>Upgrade your retail store for tomorrow</h1>
            <button className='try-vend vend-buttons'>Try Vend for free</button>
            <p>Covid-19 is affecting retail globally.it's more important tahn ever to have an omni-channel retail busiiness. Prepare for the retail resurgence with Vend</p>
        </div>
)
const DesktopUpgrade = () => (
    <div className="desktop-upgrade">
        <h1>Upgrade your retail store for tomorrow</h1>
        <p>Covid-19 is affecting retail globally.it's more important tahn ever to have an omni-channel retail busiiness. Prepare for the retail resurgence with Vend</p>
        <button className='try-vend vend-buttons'>Try Vend for free</button>
    </div>
)
const Optimise= () => (
    <div className=" optimise">
        <div className="optimise-container">
        <h2><span className='hide'>Optimise your</span> Multistore <span className='hide'>operation</span></h2>
        <p>Running a retail business across multiple outlets is challenging. Find out how Vend can help.</p>
        <button className='get-started vend-buttons'>Get Started</button>
        </div>
    </div>
)

export default Banner