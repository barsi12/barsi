import React from 'react'
import "./Hero.css";
import CountUp from 'react-countup';


const Hero = () => {
    return (
<section className="hero-wrapper">

    <div className="paddings innerWidth flexCenter hero-container">
               { /* Left section  */ }
          <div className="hero-left">
            <div className="hero-title">
                  <h1>
                        Find Your <br />
                         Perfect Home <br /> 
                  </h1>
              </div>
               < div className="hero-description">
                 <span> we will help you to find the perfect home for rent or buy, please check </span> 
                 <br />
                 <span>out all the properties by browsing the site.</span>

                 <button className="get-started-button">Get Started</button>
               
               <div className="countUp stats">
                    
                      <div className="flexColStart stat">
                        <span>
                  <CountUp start={8800} end={90000} duration={10000}/>
                    + </span>  
                   <span>Rental houses</span> 
          </div>
          </div>



<div className="countUp-sell stats">                    
                    <div className="flexColStart stat">
                      <span>
                <CountUp start={200000} end={240000} duration={20000}/>
                  + </span>  
                 <span>House for sells</span> 
     


</div>






             </div>

           </div>
          </div>
          
          <div className="flexCenter hero-right">
            <div className="image-container">

            <img src="./hero-image.png" alt=""/>  </div>

            <div className="flexCenter search-bar">
                   <input type="text" placeholder="Search by location or development name"/>

                      <button className="search-button">Search</button>
               </div>
          </div>
    </div>

   </section>


        );
} 

export default Hero;

