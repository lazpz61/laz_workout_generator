import React from 'react'


export default function Footer() {

    const getYear = () => {
        return new Date().getFullYear();
    }
   return (
       <div className='footer-wrapper'>
           <h4>Laz's Workout Generator Copyright {getYear()}</h4>
       </div>
   )
}