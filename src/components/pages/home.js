import React from 'react'

import globe from "../../../static/assets/images/globe-biceps.png";

export default function homepage() {
   return (
       <div className='home-wrapper'>
            <h1 className="header-home">Laz's Workout Generator</h1> 
            <img src={globe} alt=""/>
       </div>
   )
}