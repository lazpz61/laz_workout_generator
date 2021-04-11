import React from 'react'
import { Link } from "react-router-dom"




export default function Header(props) {
   return (
       <div className='header-wrapper'>
           <div className="left-column">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
               
           </div>

           <div className="right-column">
               <Link to="/signup">Sign Up</Link>
               <Link to="/login">Login</Link>
           </div>
           
       </div>
   )
}