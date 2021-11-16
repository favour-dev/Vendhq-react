import React from 'react';
// import {Link} from 'react-router-dom';
import logo from './images/vend-tag-logo.svg';
import Hamburger from './images/Hamburger.svg';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="app-nav">
            <div className="container">
                <div className='logo-container'>
                        <img src={logo} className="App-logo" alt="logo" />
                        {/* <p>By light speed</p> */}
                        
                    <div className= 'nav-item-container'>
                        <a href="/items" className="nav-item">WhyVend</a>
                        <a href="/items" className="nav-item">Features</a>
                        <a href="/items" className="nav-item">MultiStore</a>
                        <a href="/items" className="nav-item">Enterprise</a>
                        <a href="/items" className="nav-item">Resources</a>
                        <a href="/items" className="nav-item">Demo</a>
                        <a href="/items" className="nav-item">Pricing</a>   
                    </div>
                </div>
                <div className="button-container">
                    <button className="nav-btn">Contact Sales</button>
                    <button className="nav-btn2">Free Trials</button>
                    <div className='mobile-menu'>
                        <p>Menu</p>
                        <img src={Hamburger} className="App-hamburger" alt="hamburger" />
                    </div>
                </div>
            </div>
            {/* <Navv/> */}
        </nav>
        
    )
}

// const Navv =() => {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click)
//     return (
//    <>
//         <nav className='navbar'>
//             <div className="navbar-container">
//                 <div to='/' className='navbar-logo'>
//                     <img src={logo} className="App-logo" alt="logo" />
//                 </div>
//                     <div className= 'menu-icon' onClick={handleClick}>
//                     {/* <img src={Hamburger} className={ click ? 'fas fa-times' : 'fas fa-bars'} alt="hamburger" /> */}

//                         <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>  
//                     </div>

                
//             </div>
//         </nav>
//    </>
//     )
// }

export default Nav;