import React from 'react'
import {Link } from 'react-router-dom';

import globe from "../../../static/assets/images/globe-biceps.png";

export default function homepage() {
   return (
       <div className='home-wrapper'>
            <h1 className="header-home">Laz's Workout Generator</h1> 
                <div className="home-msg">Click Below For Free Workout Generator</div>
                    <Link className="generator" to="/generator">
                        <img src={globe} alt=""/>
                    </Link>
                <div className="home-msg">To Access Workout Index, You Will Need To Sign Up With An Account</div>
            
       </div>
   )
}