import React, { Component } from 'react'
// import Cookies from "js-cookie";

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
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
   }

   handleSubmit(event) {
    event.preventDefault()
    if (this.state.username === "" || this.state.password ==="" || this.state.confirmPassword === "") {
        this.setState({
            error: true,
            errorText: "Error: All fields must be filled in"
        })
    }
    else if ( this.state.password !== this.state.confirmPassword) {
        this.setState ({
            error: true,
            errorText: "Error: Passwords dont match"
        })
    }
        else {

            fetch("https://lmp-laz-workout-api.herokuapp.com/user/add", {
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
                console.log("error creating user", error)
                this.setState ({
                    error: true,
                    errorText: "Error: Please try later..."
                })
            })
            
        }
}
   



   render() {
       return (
           <div className='signup-wrapper'>
               <div className="signup-header">Sign Up Free to start generating workouts</div>
               <form onSubmit={this.handleSubmit}>
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
               <p style={{visibility: this.state.error ? "visible" : "hidden"}}>{this.state.errorText}</p>
           </div>
       )
   }
}   