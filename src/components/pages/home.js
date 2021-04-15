import React from 'react'
import {Link } from 'react-router-dom';

import globe from "../../../static/assets/images/globe-biceps.png";

export default function homepage() {
   return (
       <div className='home-wrapper'>
            <h1 className="header-home">Laz's Workout Generator</h1> 
            <Link to="/generator">
                <div>Click Globe to Generate Workout</div>
                <img src={globe} alt=""/>
            </Link>
            
       </div>
   )
}