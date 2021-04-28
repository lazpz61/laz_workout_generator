import React, { Component } from 'react'


export default class Generator extends Component {
    constructor(props) {
       super(props)

       this.state = {
           data: [],
           optionStyle: "",
           optionMuscle: "",
           optionEquiptment: "",
           optionMsg: "",
           filteredContainer: []
       }
       
       this.handleStyleChange = this.handleStyleChange.bind(this);
       this.handleMuscleChange = this.handleMuscleChange.bind(this);
       this.handleEquiptmentChange = this.handleEquiptmentChange.bind(this);
       this.componentDidMount = this.componentDidMount.bind(this);
       this.styleRender = this.styleRender.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

componentDidMount(){
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(responseWorkoutData => this.setState({
        data: responseWorkoutData
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

styleRender(event) {
    if(this.state.optionStyle === "Build Strength"){
        this.setState({optionMsg: "For Each Workout Perform 5 Sets of 5-8 Repitions"})
    }
    if(this.state.optionStyle === "Add Volume"){
        this.setState({optionMsg: "For Each Workout Perform 3 Sets of 8-10 Repitions"})
    }
    if(this.state.optionStyle === "Increase Endurance"){
        this.setState({optionMsg: "For Each Workout Perform 4 Sets to 12-15 Repitions"})
    }
    if(this.state.optionStyle && !this.state.optionMuscle && !this.state.optionEquiptment){
        this.setState({optionMsg: "Please Select a Muscle Group and Equiptment to Generate A New Workout"})
    }
    if(this.state.optionStyle && !this.state.optionMuscle && this.state.optionEquiptment){
        this.setState({optionMsg: "Please Select a Muscle Group to Generate A New Workout"})
    }
    if(!this.state.optionStyle && !this.state.optionMuscle && !this.state.optionEquiptment){
        this.setState({optionMsg: "Please Select a Style, Muscle Group, and Equiptment to Generate A New Workout"})
    }
    if(!this.state.optionStyle && !this.state.optionMuscle && this.state.optionEquiptment){
        this.setState({optionMsg: "Please Select a Style and Muscle Group to Generate A New Workout"})
    }
    if(this.state.optionStyle && this.state.optionMuscle && !this.state.optionEquiptment){
        this.setState({optionMsg: "Please Select an Equiptment to Generate A New Workout"})
    }
    if(!this.state.optionStyle && this.state.optionMuscle && !this.state.optionEquiptment){
        this.setState({optionMsg: "Please Select a Style and Equiptment to Generate A New Workout"})
    }



    
}

handleSubmit(event) {
    event.preventDefault();
        if(this.state.optionStyle === "" && this.state.optionMuscle && this.state.optionEquiptment){
            this.setState({optionMsg: "Please Select a Style to Generate A New Workout",
        filteredContainer: []})
        }
        else {
        this.styleRender();
        const workouts = this.state.data
        console.log("array of objects", workouts)

        let listofWorkouts = workouts.filter(workout => workout.muscle_group === this.state.optionMuscle && workout.equiptment === this.state.optionEquiptment);
        console.log("did this conditional work",listofWorkouts)

        const shuffledWorkouts = listofWorkouts.sort(() => Math.random() - 0.5); 
        const randomWorkouts = shuffledWorkouts.slice(0,5);
        
        this.setState({
            filteredContainer: randomWorkouts
        })

    }
}

renderWorkoutComponents(){
        return(
            this.state.filteredContainer.map(workout => {
                return (
                    
                    <div key={workout.id} className="workout-table">
                        {workout.exercise}
                    </div>
                )
            })
        )
}


   render() {
       return (
           <div className='generator-wrapper'>
               <h1>Please Make Selections to Start Generating Workout</h1>
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

                <div className="style-render">{this.state.optionMsg}</div>

                <div className="workout-wrapper">

                    {this.renderWorkoutComponents()}
                
                </div>
               
           </div>
       )
   }
}