import React, { Component } from 'react'
import Cookies from "js-cookie";

export default class Login extends Component {
    constructor(props) {
       super(props)

       this.state = {
           username: "",
           password: "",
           error: false,
           erroText: ""


       }
   }

   handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value})
   }

   handleSubmit = (event) => {
       event.preventDefault()

       if(this.state.username === "" || this.state.password === "") {
           this.setState({
               error: true,
               errorText: "Error: Please fill in login credentials"
           })
       }
       else {
           fetch("https://lmp-laz-workout-api.herokuapp.com/user/verify", {
               method: "POST",
               headers: { "content-type": "application/json"},
               body: JSON.stringify({
                   username: this.state.username,
                   password: this.state.password
               })
           })
           .then(response => response.json())
           .then(data => {
               if (data ==="User not verified"){
                   this.setState({
                       error: true,
                       errorText: "Invalid username or password"
                   })
               }
               else if (data == "User verified"){
                   Cookies.set("username", this.state.username)
                   this.props.history.push("/")
               }
           })
           .catch(error => {
                console.log("error during login", error)
                this.setState({
                    error: true,
                    errorText: "Error: Please try again later..."
                })
           })
       }
   }


   render() {
       return (
           <div className='login-wrapper'>
               <div className="login-header">Please Login to start generating workouts</div>
               <form onSubmit={this.handleSubmit}>
                   <input
                   type="text"
                   placeholder="Username"
                   value={this.state.username}
                   name="username"
                   onChange={this.handleChange}
                   />
                   <input
                   type="password"
                   placeholder="Password"
                   value={this.state.password}
                   name="password"
                   onChange={this.handleChange}
                   />
                   <button type="submit">Login</button>
               </form>
               <div className="login-msg" style={{visibility: this.state.error ? "visible" : "hidden"}}>{this.state.errorText}</div>
           </div>
       )
   }
}

