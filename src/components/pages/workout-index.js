import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper';

import muscleBody from "../../../static/assets/images/body-front.png";


export default class WorkoutIndex extends Component {
    constructor(props) {
       super(props)

       this.state = {
           data: [],
           clickedMuscleGroup: "",
           filteredContainer: []
       }


       this.componentDidMount = this.componentDidMount.bind(this);
       this.handleClick = this.handleClick.bind(this);
       this.renderComponents = this.renderComponents.bind(this);
   }

    componentDidMount(){
        fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
        .then(response => response.json())
        .then(responseWorkoutData => this.setState({
            data: responseWorkoutData
        }))
        .catch(error => console.log("error bringing in workouts", error))
    }

    handleClick(event){
        // event.preventDefault();
        console.log(event)
        this.setState({ clickedMuscleGroup: event.name})
        const workouts = this.state.data
        console.log("array of objects", workouts)
        let listofWorkouts = workouts.filter(workout => workout.muscle_group === this.state.clickedMuscleGroup);
        console.log("listofWorkouts", listofWorkouts)
        this.setState({filteredContainer: listofWorkouts})
        
        this.renderComponents();

    }
    // Firgure why the component is lagging

    renderComponents(){

        return (
            this.state.filteredContainer.map(workout => {
                return (
                    <tr key={workout.id} className="workout-index">
                        <td>{workout.exercise}</td>
                        <td>{workout.equiptment}</td>
                    </tr>
        )
        }))
    }

    render() {
        const Map = {
            name: "my-map",
            areas: [
                {name:"Upper Body", shape: "circle", coords: [150, 120, 20], fillColor: "#379392"},
                {name:"Upper Body", shape: "circle", coords: [110, 140, 10], fillColor: "#379392"},
                {name:"Upper Body", shape: "circle", coords: [195, 120, 20], fillColor: "#379392"},
                {name:"Upper Body", shape: "circle", coords: [235, 140, 10], fillColor: "#379392"},
                {name:"Core", shape: "rect", coords: [140, 140, 200,210], fillColor: "#379392"},
                {name:"Lower Body", shape: "circle", coords: [140, 290, 20], fillColor: "#379392"},
                {name:"Lower Body", shape: "circle", coords: [200, 290, 20], fillColor: "#379392"}
            ]

        }

        return (
            <div className='workout-index-wrapper'>
                <h1>Hover Over Muscle Group and Double Click To Access All Workouts</h1>

                <ImageMapper src={muscleBody} width={350} 
                map={Map}
                onClick={event => this.handleClick(event)}
                />
                Workout and Equiptment
                <table id="workout-index-table">
                    <tbody>
                        {this.renderComponents()}
                    </tbody>
                    
                </table>
                
                
            </div>
        )
    }
}