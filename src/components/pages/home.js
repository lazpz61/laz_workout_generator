import React from 'react'
import {Link } from 'react-router-dom';

import globe from "../../../static/assets/images/globe-biceps.png";

export default function homepage() {
   return (
       <div className='home-wrapper'>
            <h1 className="header-home">Laz's Workout Generator</h1> 
            <Link to="/generator">
                <div className="home-msg2">Click below for free workout Generator</div>
                <img src={globe} alt=""/>
                <div className="home-msg2">To access workout index, you will need to sign up with an account</div>
            </Link>
            
       </div>
   )
}