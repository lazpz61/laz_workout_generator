import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
       super(props)

       this.state = {
           username: "",
           password: "",

       }
   }

//    Todo -  need to add the functions to get this to fetch the API, so first deploy the API to heroku and then apply the POST Restful API's

   render() {
       return (
           <div className='login-wrapper'>
               <div className="login-header">Please Login to start generating workouts</div>
               <form>
                   <input
                   type="text"
                   placeholder="Username"
                   name="username"
                   onChange={this.function}
                   />
                   <input
                   type="password"
                   placeholder="Password"
                   name="password"
                   onChange={this.function}
                   />
                   <button type="submit">Login</button>
               </form>
           </div>
       )
   }
}