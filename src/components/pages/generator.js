import React, { Component } from 'react'


export default class Generator extends Component {
    constructor(props) {
       super(props)

       this.state = {
           data: [],
           optionStyle: "",
           optionMuscle: "",
           optionEquiptment: ""
       }
       this.componentWillMount = this.componentWillMount.bind(this)
   }

componentWillMount(){
    // let workoutList = []
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("error bringing in workouts", error))
}

// renderWorkouts

   render() {
       return (
           <div className='generator=wrapper'>
               <h1>This will be where the workout generator will be placed</h1>
                
                <label htmlFor="style">Style</label>
                    
                    <select 
                    name="style"
                    value={this.state.option}
                    >
                        <option  value="build strength">Build Strength</option>
                        <option  value="add volume">Add Volume</option>
                        <option value="increase endurance">Increase Endurance</option>
                    </select>
               
               <label htmlFor="muscle_groups">Muscle Groups</label>
                
                    <select
                    name="muscle_groups"
                    value={this.state.optionMuscle}
                    >
                        <option value="">Upper Body</option>
                        <option value="">Core</option>
                        <option value="">Lower Body</option>
                    </select>
               
               <label htmlFor="equiptment">Equiptment</label>
                
                    <select
                    name="equiptment"
                    value={this.state.optionEquiptment}
                    >
                        <option value="">BodyWeight</option>
                        <option value="">Dumbell</option>
                        <option value="">Machines</option>
                        <option value="">Barbell</option>
                    </select>

                <button className="btn" type="submit">Generate Workout</button>
           </div>
       )
   }
}