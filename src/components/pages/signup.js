import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props) {
       super(props)

       this.state = {
        username: "",
        password: "",
        confirmPassword: "",
        error: false,
        errorText: ""
       }
    
   }

   handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
   }

   render() {
       return (
           <div className='signup-wrapper'>
               <div className="signup-header">Sign Up Free to start generating workouts</div>
               <form>
                   <input
                   type="text"
                   value={this.state.username}
                   placeholder="Username"
                   name="username"
                   onChange={this.handleChange}
                   />
                   <input
                   type="password"
                   value={this.state.password}
                   placeholder="Password"
                   name="password"
                   onChange={this.handleChange}
                   />
                   <input
                   type="password"
                   value={this.state.confirmPassword}
                   placeholder="Confirm Password"
                   name="confirmPassword"
                   onChange={this.handleChange}
                   />
                   <button type="submit">Start Generating</button>
               </form>
           </div>
       )
   }
}   