import React from 'react';
import'./Location.css'
import star from './images/star.png'
// import {items} from './Static-data.json'
import yellow from './images/Great-Yellow-Brick-photo_200109_002110.jpg'
import yellowlogo from './images/Great-Yellow-Brick-Co-logo_200109_002110.png'
import scanner from './images/Inventory-Image2-scanner_200109_003117.png'
import macbook from './images/Inventory-Image1-macbook_200109_003117.svg'
import linenlogo from './images/Linen-House-logo_200109_002930.png'
import linen from './images/Linen-House-photo_200109_003018.jpg'
import sennheiserlogo from './images/Sennheiser-logo_200109_002931.png'
import sennheiser from './images/Sennheiser-photo_200109_003018.jpg'
import report from './images/Reporting-Image1-dashboard_200109_003239.png'
import healthlogo from './images/HealthPost-logo_200109_002931.png'
import health from './images/HealthPost-photo_200109_003019.jpg'
import shoe from './images/Ecommerce-Image1-shoe_200109_003257.svg'
import iphone from './images/Ecommerce-Image2-iphone_200109_003258.svg'
import ipad from './images/Ecommerce-Image3-ipad_200109_003258.svg'
import mac from './images/Ecommerce-Image4-macbook_200109_003256.svg'
import sixlogo from './images/Number-Six-logo_200109_002932.png'
import six from './images/Number-Six-photo_200109_003020.jpg'
import shopify from './images/shopify.svg'
import bigcommerce from './images/Bigcommerce.svg'
import woocommerce from './images/Woocommerce.svg'
import expert from './images/Support-Image1-team_200109_003312.svg'
import check from './images/check.png'
import desktop from './images/Platform-Image1-api_200109_003324.svg'
import gasman from './images/GAS-photo_200109_003021.jpg'
import gaslogo from './images/GAS-logo_200109_002932.png'
import choicelogo from './images/Choice-Technology-logo_200109_002933.png'
import demo from './images/DemoVideo-PreviewImage1_200109_005438.jpg'
import vaughan from './images/Intro-Photo-Vaughan.svg'
import macbookpos from './images/macbook.svg'
import ipadpos from './images/POS-Image1-ipad_200109_001520.svg'
import posvideo from './images/POS-Video_200109_001521.mp4'
import poshand from './images/Step1-Image2-payments.svg'




// import data from './Object';

const Location = () => (
    <div>
        <div>
            <Star/>
            <Customer/>
            <Timeline/>
            <Pos/>
            <Posimages/>
            <AccessPos/>
            < Greatyellowbrick/>
            <Inventorymanagement/>
            <Linenhouse/>
            <Multioutlet/>
            <Sennheiser/>
            <Reporting/>
            <Healthpost/>
            <Ecommerce/>
            <Six/>
            <Expertadvice/>
            <Trustvend/>
            <Vendbusiness/>
            <Gas/>
            <Demo/>
            <Retailer/>
            <Vaughan/>
            <Getstarted/>
        </div>
    </div>
)

const Star = () => {
    return (
        <div className='general-margin'>
          <div class="content-two inventory-container">
                   <div class="stars">
                       <span><img src={star} className='star' alt='star'/></span>
                       <span><img src={star} className='star'alt='star'/></span>
                       <span><img src={star} className='star'alt='star'/></span>
                       <span><img src={star} className='star'alt='star'/></span>
                       <span><img src={star} className='star'alt='star'/></span>
                       <p>"Best POS hands down!"</p>
                   </div> 
                   <div class="stars">
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star}className='star' alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star}className='star'alt='star'/></span>
                        <p>"A breath of fresh air!"</p>
                    </div> 
                    <div class="stars">
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star}className='star' alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <p>"Amazing customer service!"</p>
                    </div> 
                    <div class="stars">
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <span><img src={star} className='star'alt='star'/></span>
                        <p>"Vend is a game changer!"</p>
                    </div> 
                </div>
        </div>
    )
}

const Customer = () => {
    return (
        <div className='customer general-margin'>
            <h2>20,000 customer locations around the world trust Vend to power their stores.</h2>
            <p>We’ve been helping retailers start and grow their businesses for 10 years! Combined, our retailers have annual sales of more than $10B NZD.</p>
        </div>
    )
}
const Timeline = () => {
    return (
        <div className="timeline-wrapper">
        <div className="middle-line">
            <div className="box-content">
                <p><span className='hide-mobile'>Fast & easy, Cloud-Based</span>POS</p>
            </div> 
            <div className="box-content">
                <p>Inventory<span className='hide-mobile'>Management</span></p>
            </div>

            <div className="box-content">
                <p>Multi-outlet<span className='hide-mobile'>Scalability</span></p>
            </div>
            <div className="box-content">
                <p><span className='hide-mobile'>Real-Time</span>Reporting</p>
            </div>


            <div className="box-content">
                <p>Ecommerce<span className='hide-mobile'>Integrations</span></p>
            </div>
   
            <div className="box-content">
                <p><span className='hide-mobile'>Expert Advice &</span>Support</p>
            </div>
        </div>
    </div>
    )
}


const Pos = () => {
    return (
        <div className='customer pos general-margin'>
            <h2>One of the world’s easiest POS software to use</h2>
            <p>We designed a user-friendly interface that’s fast to use and easy to learn, minimizing training time. Works seamlessly with existing or new hardware. All your data is synced to the cloud and accessible from anywhere.</p>
            <a href="https://www.vendhq.com/tour/point-of-sale">Learn more about Vend in-store Point of Sale </a>
        </div>
    )
}
const Posimages = () => {
    return(
        <div className='posimages general-margin'>
            <div className="pos-images">
                <img src={macbookpos} alt="hi" className="side-macbook"/>        
                <img src={ipadpos} alt="hi" className="ipad"/>
                <video src={posvideo} alt='hi' className='ipad-video'/> 
                <img src={poshand} alt="hi" className="pos-hand"/>
       
            </div>
        </div>
    )
}
const AccessPos = () => {
    return (
        <div className='customer pos general-margin'>
            <h2>Choose from the best payment solutions in retail.</h2>
            <p>Accept all the ways your customers want to pay with a seamless and secure checkout experience. Vend integrates with leading payment providers around the world saving you time and ensuring you get paid.</p>
            <a href="https://www.vendhq.com/tour/accept-payments?">Learn more about integrated payments  </a>
        </div>
    )
}

const Greatyellowbrick = ({data}) => {
    return (
        <div className='customer pos general-margin'>
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

const Inventorymanagement = () => (

    <div className="inventory general-margin">
        <div className="inventory-container">
            <div className='power-inventory'>
                <div className='power'>
                    <h2>Powerful inventory managemnet to help maximize your profits.</h2>
                    <img src={macbook} alt='macbook' className='macbook'/>
                    <p>Manage inventory across multiple outlets with a centralised product catalog, accessible from your POS, back-office, or on the road. Edit products in bulk. Automatically reorder stock. Create variants and composites. Print labels and barcodes. We’ve even simplified stock-taking with our free app, Scanner by Vend.</p>
                    <a href='https://www.vendhq.com/tour/inventory-management'>See how Vend makes your products work for you </a>
                    <img src={scanner} alt='scanner' className='scanner2'/>
                </div>
                <img src={macbook} alt='macbook' className='macbook2'/>
            </div>
            
           
            <img src={scanner} alt='scanner' className='scanner'/>
        </div>

    </div>
)

const Linenhouse = () => {
    return (
        <div className='customer pos mobile general-margin'>
            <div className='yellow-container'>
                <div className='yellow'>
                    <div className='yellow-left-container'>
                        <p>“Vend supports our retail growth strategy very well. In the last 14 months, we’ve opened nine new stores which run Vend POS. It took less than a few hours max to set up each store.”</p>
                        <div className='yellow-desktop'>
                        <img src={linenlogo} className="yellowlogo-desktop" alt="home" />
                        <a href="https://www.vendhq.com/customers/linen-house">See how Linen House opened 9 new stores and saved with Vend </a>
                        </div>
                    </div>
                    <div>
                        <img src={linen} className="yellowshop" alt="home" />
                    </div>
                </div>
                <div className="logolink">
                    <img src={linenlogo} className="yellowlogo" alt="home" />
                    <a href="https://www.vendhq.com/customers/linen-house">See how Linen House opened 9 new stores and saved with Vend  </a>
                </div>
            </div>
        </div>
    )
}


const Multioutlet = () => (
    <div className="multioutlet general-margin">
        <div className="multioutlet-container">
            <h2>Multi-outlet functionality that scales with your business.</h2>
            <p>Vend makes it easy to add new outlets and registers as your business grows. All of Vend’s key features including POS, inventory, and reporting are designed for multiple outlets so your business operates as one cohesive operation. Ecommerce integrations support fulfilment from any store.</p>
            <a href="https://www.vendhq.com/multi-store-pos">See how Vend works for retailers with multiple outlets </a>
              
        </div>

    </div>
)

const Sennheiser = ({data}) => {
    return (
        <div className='customer pos mobile general-margin'>
            <div className='yellow-container'>
                <div className='yellow'>
                    <div className='yellow-left-container'>
                        <p>“With Vend, we can literally launch a store in 5 minutes, add 20 registers, and set up multiple locations anywhere in the world.”</p>
                        <div className='yellow-desktop'>
                        <img src={sennheiserlogo} className="yellowlogo-desktop" alt="home" />
                        <a href="https://www.vendhq.com/customers/sennheiser">See how Sennheiser uses Vend to run a multi-outlet retail operation  </a>
                        </div>
                    </div>
                    <div>
                        <img src={sennheiser} className="yellowshop" alt="home" />
                    </div>
                </div>
                <div className="logolink">
                    <img src={sennheiserlogo} className="yellowlogo" alt="home" />
                    <a href="https://www.vendhq.com/customers/sennheiser">See how Sennheiser uses Vend to run a multi-outlet retail operation   </a>
                </div>
            </div>
        </div>
    )
}

const Reporting = () => (
    <div className='report general-margin'>
        <div className='inventory-container'>
            <h2>Real-time reporting for smarter business decisions.</h2>
            <div className='reporting'>
                <div className='report-text'>
                    <p>Vend takes the guesswork out of decision-making with powerful sales and inventory reporting that’s live and accurate to the minute. Help increase profitability with key retail metrics including sales, inventory levels, sell-through rates, margin and more. Access reports 24/7 from anywhere.</p>
                    <a href="https://www.vendhq.com/tour/pos-reporting">Learn more about real-time reporting & insights in Vend </a>
                </div>
                <div className='report-image'>
                    <img src={report} className="reportimage" alt="report" />
                </div>
            </div>
        </div>
    </div>
)

const Healthpost = () => {
    return (
        <div className='customer pos mobile general-margin'>
            <div className='yellow-container'>
                <div className='yellow'>
                    <div className='yellow-left-container'>
                        <p>“Using Vend is effortless and easy. I love being able to check the reports and access Vend from anywhere — even just from my phone when I’m out and about.”</p>
                        <div className='yellow-desktop'>
                        <img src={healthlogo} className="yellowlogo-desktop" alt="home" />
                        <a href="https://www.vendhq.com/customers/healthpost">See how HealthPost saw a 75% YOY increase in sales using Vend</a>
                        </div>
                    </div>
                    <div>
                        <img src={health} className="yellowshop" alt="home" />
                    </div>
                </div>
                <div className="logolink">
                    <img src={healthlogo} className="yellowlogo" alt="home" />
                    <a href="https://www.vendhq.com/customers/healthpost">See how HealthPost saw a 75% YOY increase in sales using Vend</a>
                </div>
            </div>
        </div>
    )
}
const Ecommerce = () => (
    <div className='ecommerce general-margin'>
        <div className='inventory-container'>
            <div className='commerce-container'> 
                <img src={shoe} className="shoe" alt="home" />
                <img src={iphone} className=" phone" alt="home" />
                <img src={ipad} className="ipad" alt="home" />
                <img src={mac} className="mac" alt="home" />
            </div>
            <div className='ecommerce-everywhere'>
                <h2>Be everywhere with a choice of ecommerce integrations.</h2>
                <p>We’ve partnered with the world’s leading ecommerce platforms to ensure you can meet the needs of your customers both online and in-store. Deliver faster and fulfil from any store with our seamless Shopify, BigCommerce and WooCommerce integrations.</p>
                <a href="https://www.vendhq.com/tour/ecommerce-solutions">See how Vend can help you become an omnichannel retailer </a>
                
            </div>
            <div className="commerce-icons">
                <img src={shopify} className="shopify" alt="home" />
                <img src={bigcommerce} className="big" alt="home" />
                <img src={woocommerce} className="woo" alt="home" />
            </div>
        </div>
    </div>
)
const Six = () => {
    return (
        <div className='customer pos mobile general-margin'>
            <div className='yellow-container'>
                <div className='yellow'>
                    <div className='yellow-left-container'>
                        <p>“Vend’s integrations with Shopify and Xero have saved us time and allowed us to keep closer track of accounts and cash flow. Vend has allowed us to grow faster and to focus on growing.”</p>
                        <div className='yellow-desktop'>
                        <img src={sixlogo} className="yellowlogo-desktop" alt="home" />
                        <a href="https://www.vendhq.com/customers/number-six">See how Number Six uses Vend to achieve 40% YOY retail growth</a>
                        </div>
                    </div>
                    <div>
                        <img src={six} className="yellowshop" alt="home" />
                    </div>
                </div>
                <div className="logolink">
                    <img src={sixlogo} className="yellowlogo" alt="home" />
                    <a href="https://www.vendhq.com/customers/number-six">See how Number Six uses Vend to achieve 40% YOY retail growth</a>
                </div>
            </div>
        </div>
    )
}
const Expertadvice = () => (
    <div className='expert general-margin'>
        <div className='expert-container'>
            <div className='consultation'>
                <h2>Award winning support. Expert advice to help you succeed.</h2>
                <p>Our team of retail specialists is ready and waiting to get your business setup just right, and keep you growing from there. We're available by live chat, email and phone. Plus we offer personalised on-boarding packages for you and your team</p>
                <button>Book a consultation</button><span><p>Or, call us now on +1-844-942-2...</p></span>
            </div>
            <div>
                <img src={expert} className="expertimage" alt="home" />
            </div>
        </div>
    </div>
)

const Trustvend = ()  =>(
    <div>
        <div className="inventory-container general-margin">
            <h2>You can trust Vend with your business</h2>
            <div className="trust-items">
                <div class="item-1">
                    <span><img src={check} className='check' alt="check" /></span>
                    <p> Your data is securly stored in the cloud and backed up every hour</p>
                </div>
                <div class="item-1">
                    <span><img src={check} className='check' alt="check" /></span>
                    <p> Vend is compliant with PCI data security standard SAQ A-EP</p>
                </div>
                <div class="item-1">
                    <span><img src={check} className='check' alt="check" /></span>
                    <p> The security of Vend’s systems is regularly tested by independent auditors</p>
                </div>
                <div class="item-1">
                    <span><img src={check} className='check' alt="check" /></span>
                    <p> Vend’s service is highly reliable, so you can minimize interruptions.</p>
                </div>
            </div>
            <a href="https://www.vendhq.com/security">Read more about security</a>
        </div>
    </div>
)
const Vendbusiness = () => (
    <div className='vendbusiness general-margin'>
        <div className='inventory-container'>
            <h2>Build your business on Vend’s open platform.</h2>
            <div className='reporting'>
                <div className='report-text'>
                    <p>Vend was the world’s first cloud-based POS. We were founded 10 years ago by engineers with a passion for retail, so, naturally, a fully documented open API is built right into the heart of the product. Leverage the Vend platform to improve your own offering or simply integrate your existing business applications.</p>
                    <a href="https://www.vendhq.com/partners/developers">Visit the developer hub and register as a developer </a>
                </div>
                <div className='report-image'>
                    <img src={desktop} className="reportimage" alt="report" />
                </div>
            </div>
        </div>
    </div>
)
const Gas = () => (
    <div className='Gas'>
        <div className='inventory-container'>
            <div className='gas-container'>
                <div className='gas-text'>
                     <p>“This world’s first project for Gasoline Alley Services (GAS) would have been impossible without Vend. The extensibility of Vend through the API and the support that we’ve received from the Vend team have been second to none.”</p>
                     <div className="gas-logo">
                        <img src={gaslogo} className="gaslogo" alt="report" /> 
                        <img src={choicelogo} className="choicelogo" alt="report" /> 
                    </div>
                </div>
                <div className='gas-man'>
                    <img src={gasman} className="gasman" alt="report" /> 
                 </div>
            </div>
           
        </div>
    </div>
)
const Demo = () => (
    <div className="demo general-margin">
        <div className='demo-image'>
         <img src={demo} className="" alt="report" /> 
         </div>
         <div class="bottom-text ">
            <h2>Discover how easy it is to transform your retail business with Vend</h2>
            <p>Watch our demo to see why Vend is perfect for inventory based retailers like you.</p>                  
        </div>
    </div>
)

const Retailer = () => (
    <div className='general-margin'>
        <div class="inventory-container">
            <h2>What are retailers saying about Vend?</h2>
     
        <div class="the-review">
            <div class="review1">
                <p>"Frequently updated and prompt customer service."</p>
                <div class="review2">
                        <p>Amer | Byward Center</p>
                </div> 
            </div>     
            <div class="review1">
                <p>"Everything works simply and there are constant improvements."</p>
                   <div class="review2"> 
                        <p>Jan | Mosey</p>
                </div> 
            </div>
            <div class="review1">
                <p>"No downtime, new features all the time and easy to use."</p>
                     <div class="review2">
                        <p>Alex | Buster McGee</p>
                 </div>
            </div>
            <div class="review1">
                <p>"Very easy, very clear, and great customer support!."</p>
                     <div class="review2">
                        <p>Demma | WJEST</p>
                </div> 
            </div>
                <div class="review1">
                    <p>"I like that you listen to your clients and you are forever changing keeping ahead of the game."</p>
                     <div class="review2">
                        <p>Luella Kina | NZ Design + Artspace</p>
                 </div> 
                </div>
                <div class="review1">
                    <p>"Vend gives me great data to analyse and helps me decide which products are earning their keep and worth stocking in my shop."</p>
                    <div class="review2">
                        <p>Cathy | The Quilting Shed</p>
                    </div> 
                </div>
            </div>
            <a href="https://www.vendhq.com/customers" className='padding'>Read more retailers story</a>

            </div>
        </div>

)

const Vaughan = () => (
    <div className='vendbusiness general-margin'>
        <div className='inventory-container'>
            <h2>Unlock your retail super power with Vend.</h2>
            <div className='reporting'>
                <div className='report-image'>
                    <img src={vaughan} className="reportimage" alt="report" />
                </div>
                <div className='report-text'>
                    <h3>We built Vend because we believe that technology can unlock more of what makes your retail store great: you.</h3>
                    <p>You’re the magic. You’re the special sauce. You’re your unfair competitive advantage. It’s your decisions every day—what to buy, how to curate your store, how to treat your customers—that make you successful.We built Vend because we believe, perhaps more than ever, that the world needs more passionate retailers like you.</p>
                    <a href="https://www.vendhq.com/retail-success">Discover the 7 Steps of Successful Retailers  </a>
                </div>
                
            </div>
        </div>
    </div>
)
const Getstarted = () =>(
    <div className='general-margin'>
        <div className='inventory-container'>
            <div class="let-get-started">
                <h2>Let's get started</h2>
                <p>Start your free trial and take Vend for a spin. Or have a chat with our team to find out if Vend is right for you and your business.</p>
            </div>
            <div class="contact">
                 <div class="left">
                    <button class="vend-free">Try Vend for free</button>
                    <p>Includes 24/7 access to support & advice to get you started. No commitment, no credit card required.</p>
                </div>
                <div class="right">
                    <p>Our team of retail specialists are on hand to help. Tap the button to request a call-back at a time that suits you.</p>
                    <button class="get-in-touch">Get in touch</button>
                    <p>Or, call us now on +1-844-942-2..</p>
                </div>
            </div>

        </div>
    </div>
)
export default Location