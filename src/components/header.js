import React from 'react'

export default function Header(props) {
   return (
       <div className='header-wrapper'>
           <div className="left-column">
               <h1>Logo</h1>
           </div>

           <div className="right-column">
               <h1 className="h1">Sign In</h1>
               <h1 className="h1">Login</h1>
           </div>
           
       </div>
   )
}