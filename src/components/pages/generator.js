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


    //    this.handleChange = this.handleChange.bind(this)
    //    this.handleSubmit = this.handleSubmit.bind(this)
       this.componentWillMount = this.componentWillMount.bind(this)
   }

componentWillMount(){
    // let workoutList = []
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(data => console.log("Response from Workout API",data))
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
                        <option  value="Build Strength">Build Strength</option>
                        <option  value="Add Volume">Add Volume</option>
                        <option value="Increase Endurance">Increase Endurance</option>
                    </select>
               
               <label htmlFor="muscle_groups">Muscle Groups</label>
                
                    <select
                    name="muscle_groups"
                    value={this.state.optionMuscle}
                    >
                        <option value="Upper Body">Upper Body</option>
                        <option value="Core">Core</option>
                        <option value="Lower Body">Lower Body</option>
                    </select>
               
               <label htmlFor="equiptment">Equiptment</label>
                
                    <select
                    name="equiptment"
                    value={this.state.optionEquiptment}
                    >
                        <option value="Body Weight">BodyWeight</option>
                        <option value="Dumbell">Dumbell</option>
                        <option value="Machines">Machines</option>
                        <option value="Barbell">Barbell</option>
                    </select>

                <button className="btn" type="submit">Generate Workout</button>
           </div>
       )
   }
}