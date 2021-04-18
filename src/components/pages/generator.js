import React, { Component } from 'react'


export default class Generator extends Component {
    constructor(props) {
       super(props)

       this.state = {
           data: [],
           optionStyle: "",
           optionMuscle: "",
           optionEquiptment: "",
           optionMsg: ""
       }
       
       this.handleStyleChange = this.handleStyleChange.bind(this);
       this.handleMuscleChange = this.handleMuscleChange.bind(this);
       this.handleEquiptmentChange = this.handleEquiptmentChange.bind(this);
       this.componentDidMount = this.componentDidMount.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

componentDidMount(){
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(responseWorkoutData => this.setState({
        data: [responseWorkoutData]
    }))
    .catch(error => console.log("error bringing in workouts", error))
}

handleStyleChange(event) {
    this.setState({optionStyle: event.target.value});
}

handleMuscleChange(event) {
    this.setState({optionMuscle: event.target.value});
}

handleEquiptmentChange(event) {
    this.setState({optionEquiptment: event.target.value});
}

handleSubmit(event){
    const workouts = this.state.data
    event.preventDefault();
    console.log("Lets gooo baby", workouts);
    if(this.state.optionStyle === "Build Strength"){
        this.setState({optionMsg: "5 Sets of 5-8 Repitions"})
    }
    if(this.state.optionStyle === "Add Volume"){
        this.setState({optionMsg: "3 Sets of 8-10 Repitions"})
    }
    if(this.state.optionStyle === "Increase Endurance"){
        this.setState({optionMsg: "4 Sets to 12-15 Repitions"})
    } else if (this.state.optionStyle === "") {
        this.setState({optionMsg: ""})
    } 
        
}

// #TODO 
// renderWorkouts this is going to be put inside of the handlesubmit method somehow

   render() {
       return (
           <div className='generator=wrapper'>
               <h1>This will be where the workout generator will be placed</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="style">Style</label>
                        
                        <select 
                        name="style"
                        value={this.state.optionStyle}
                        onChange={this.handleStyleChange}
                        >
                            <option  value="">{`Select Style`}</option>
                            <option  value="Build Strength">Build Strength</option>
                            <option  value="Add Volume">Add Volume</option>
                            <option value="Increase Endurance">Increase Endurance</option>
                        </select>
                
                    <label htmlFor="muscle_groups">Muscle Groups</label>
                    
                        <select
                        name="muscle_groups"
                        value={this.state.optionMuscle}
                        onChange={this.handleMuscleChange}
                        >
                            <option value="">{`Select Muscle Group`}</option>
                            <option value="Upper Body">Upper Body</option>
                            <option value="Core">Core</option>
                            <option value="Lower Body">Lower Body</option>
                        </select>
                
                    <label htmlFor="equiptment">Equiptment</label>
                    
                        <select
                        name="equiptment"
                        value={this.state.optionEquiptment}
                        onChange={this.handleEquiptmentChange}
                        >
                            <option value="">{`Select Equiptment`}</option>
                            <option value="Body Weight">Body Weight</option>
                            <option value="Dumbell">Dumbell</option>
                            <option value="Machines">Machines</option>
                            <option value="Barbell">Barbell</option>
                        </select>
                    <button className="btn"  type="submit" value="Submit">Generate Workout</button>
                </form>
                <h3>For each workout perform </h3>
                <div className="style-render">{this.state.optionMsg}</div>
                {/* Utilize this part to show the workouts based on the the chouies made by the user */}
                
           </div>
       )
   }
}