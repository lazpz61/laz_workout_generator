import React from 'react'
import { Link } from "react-router-dom"
import { withRouter} from 'react-router';
import Cookies from 'js-cookie';


import logoLaz from "../../static/assets/images/logo.png";




function header(props) {
    const handleLogout = () => {
        Cookies.remove("username")
        props.history.push("/")
    }
   return (
       <div className='header-wrapper'>
           <div className="left-column">
                <Link to="/">
                    <img src={logoLaz} alt="" />
                </Link>
               
           </div>
            {Cookies.get("username")
                
            ?   <div className="right-column portal-logout">
                    <Link to="/generator">Workout Generator</Link>
                    <Link to="/workout-index">Workout Index</Link>
                    <span id="span" onClick={handleLogout}>Log Out</span>
                </div>
                        
            : 

                <div className="right-column">
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
            }
           
       </div>
   )
}

export default withRouter(header); 