import React from 'react';
import'./Location.css'
import star from './images/star.png'
import {items} from './Static-data.json'
import yellow from './images/Great-Yellow-Brick-photo_200109_002110.jpg'
import yellowlogo from './images/Great-Yellow-Brick-Co-logo_200109_002110.png'
// import data from './Object';

const Location = () => (
    <div>
        <div>
            <Star/>
            <Customer/>
            <Timeline/>
            <Pos/>
            <AccessPos/>
            < Greatyellowbrick/>
        </div>
    </div>
)

const Star = () => {
    return (
        <div>
           {items.map = ((items) => 
                <li key={items.id}>
                    <p>{items.name}</p>
                   <img src= {star} alt='star'/>
                </li>
            )}
        </div>
    )
}

const Customer = () => {
    return (
        <div className='customer'>
            <h2>20,000 customer locations around the world trust Vend to power their stores.</h2>
            <p>We’ve been helping retailers start and grow their businesses for 10 years! Combined, our retailers have annual sales of more than $10B NZD.</p>
        </div>
    )
}
const Timeline = () => {
    return (
        <div className="timeline-wrapper">
        <div className="middle-line">
            {/* <div className="box-content">
                <p>Support</p>
            </div> 
            <div className="box-content">
                <p>Ecommerce</p>
            </div>

            <div className="box-content">
                <p>Reporting</p>
            </div>
            <div className="box-content">
                <p>Multi-outlet</p>
            </div>


            <div className="box-content">
                <p>Inventory</p>
            </div>
   
            <div className="box-content">
                <p>POS</p>
            </div> */}
        </div>
    </div>
    )
}


const Pos = () => {
    return (
        <div className='customer pos'>
            <h2>One of the world’s easiest POS software to use</h2>
            <p>We designed a user-friendly interface that’s fast to use and easy to learn, minimizing training time. Works seamlessly with existing or new hardware. All your data is synced to the cloud and accessible from anywhere.</p>
            <a href="https://www.vendhq.com/tour/point-of-sale">Learn more about Vend in-store Point of Sale </a>
        </div>
    )
}
const AccessPos = () => {
    return (
        <div className='customer pos'>
            <h2>Choose from the best payment solutions in retail.</h2>
            <p>Accept all the ways your customers want to pay with a seamless and secure checkout experience. Vend integrates with leading payment providers around the world saving you time and ensuring you get paid.</p>
            <a href="https://www.vendhq.com/tour/accept-payments?">Learn more about integrated payments  </a>
        </div>
    )
}

const Greatyellowbrick = ({data}) => {
    return (
        <div className='customer pos'>
            <div className='yellow-container'>
                <div className='yellow'>
                    <div className='yellow-left-container'>
                        <p>“It’s easy to work with all of the features within Vend. We can set things up correctly the first time and it’s so simple for our staff to use.”</p>
                        <div className='yellow-desktop'>
                        <img src={yellowlogo} className="yellowlogo-desktop" alt="home" />
                        <a href="https://www.vendhq.com/customers/great-yellow-brick">See how Great Yellow Brick created a unique retail experience with Vend </a>
                        </div>
                    </div>
                    <div>
                        <img src={yellow} className="yellowshop" alt="home" />
                    </div>
                </div>
                <div className="logolink">
                    <img src={yellowlogo} className="yellowlogo" alt="home" />
                    <a href="https://www.vendhq.com/customers/great-yellow-brick">See how Great Yellow Brick created a unique retail experience with Vend </a>
                </div>
            </div>
        </div>
    )
}

const Inventorymanagement = () => {
    <div className="inventory">
        <div className="inventory-container">
            <h2>Powerful inventory managemnet to help maximize your profits.</h2>
        </div>

    </div>
}
export default Location