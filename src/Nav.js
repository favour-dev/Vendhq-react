import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {MenuItems} from './Object.js'
import logo from './images/vend-tag-logo.svg';
// import Hamburger from './images/Hamburger.svg';
import './Nav.css';

class Nav extends Component {
    state = {clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked })
    }
    render() {
    
    return (
            <nav className="app-nav">
                <div className="container">
                    <div className='logo-container'>
                            <img src={logo} className="App-logo" alt="logo" />
                            {/* <p>By light speed</p> */}
                            
                        <ul className= {this.state.clicked ? 'nav-item-container active' : 'nav-item-container'}>
                            {MenuItems.map((item, index)=> {
                                return(
                                    <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="button-container">
                        <button className="nav-btn">Contact Sales</button>
                        <button className="nav-btn2">Free Trials</button>
                        <div className='mobile-menu' onClick={this.handleClick}>
                            <p>Menu</p>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                    </div>
                </div>
                {/* <Navv/> */}
            </nav>
            
        )
    }
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

//                     <div className= 'nav-item-container'>
//                         <Link to="/" className="nav-item">WhyVend</Link>
//                         <Link to="/" className="nav-item">Features</Link>
//                         <Link to="/" className="nav-item">MultiStore</Link>
//                         <Link to="/" className="nav-item">Enterprise</Link>
//                         <Link to="/" className="nav-item">Resources</Link>
//                         <Link to="/" className="nav-item">Demo</Link>
//                         <Link to="/" className="nav-item">Pricing</Link>   
//                     </div>
//                 </div>
//                     {/* <div className= 'menu-icon' onClick={handleClick}>
//                     {/* <img src={Hamburger} className={ click ? 'fas fa-times' : 'fas fa-bars'} alt="hamburger" /> */}

//                         {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>  
//                     </div> */}

                
//             </div>
//         </nav>
//    </>
//     )
// }

export default Nav;