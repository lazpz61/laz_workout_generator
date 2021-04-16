import React, { Component } from 'react'


export default class Generator extends Component {
    constructor(props) {
       super(props)

       this.state = {
           data: [],
           optionState: this.props.optionState
       }
       this.componentWillMount = this.componentWillMount.bind(this)
   }

componentWillMount(){
    // let workoutList = []
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(data => console.log(data))
}

// renderWorkouts

   render() {
       return (
           <div className='generator=wrapper'>
               <h1>This will be where the workout generator will be placed</h1>
                
                <label htmlFor="style">Style</label>
                    
                    <select 
                    name="style"
                    value={this.optionState}
                    >
                        <option  value="">Build Strength</option>
                        <option value="">Add Volume</option>
                        <option value="">Increase Endurance</option>
                    </select>
               
               <label htmlFor="muscle_groups">Muscle Groups</label>
                
                    <select
                    name="muscle_groups"
                    value={this.optionState}
                    >
                        <option value="">Upper Body</option>
                        <option value="">Core</option>
                        <option value="">Lower Body</option>
                    </select>
               
               <label htmlFor="equiptment">Equiptment</label>
                
                    <select
                    name="equiptment"
                    value={this.optionState}
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