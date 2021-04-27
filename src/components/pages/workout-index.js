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
        console.log(event)
        const workouts = this.state.data
        console.log("array of objects", workouts)
        let listofWorkouts = workouts.filter(workout => workout.muscle_group === event.name);
        this.setState({filteredContainer: listofWorkouts,
            clickedMuscleGroup: event.name
        })
        console.log("listofWorkouts", listofWorkouts)
    }


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
                {name:"Upper Body", shape: "circle", coords: [135, 110, 20], fillColor: "#379392"},
                {name:"Upper Body", shape: "circle", coords: [100, 135, 10], fillColor: "#379392"},
                {name:"Upper Body", shape: "circle", coords: [179, 110, 20], fillColor: "#379392"},
                {name:"Upper Body", shape: "circle", coords: [215, 135, 10], fillColor: "#379392"},
                {name:"Core", shape: "rect", coords: [125, 130, 190,200], fillColor: "#379392"},
                {name:"Lower Body", shape: "circle", coords: [130, 270, 20], fillColor: "#379392"},
                {name:"Lower Body", shape: "circle", coords: [190, 270, 20], fillColor: "#379392"}
            ]

        }

        return (
            <div className='workout-index-wrapper'>
                <h1>Hover Over Muscle Group and Double Click To Access All Workouts</h1>
                <div className="img-wrapper">
                    <ImageMapper src={muscleBody} width={320}
                    map={Map}
                    onClick={event => this.handleClick(event)}
                    />
                </div>
                <h3> ---Workout and Equiptment---  </h3>
                <table id="workout-index-table">
                    <tbody>
                        {this.renderComponents()}
                    </tbody>
                    
                </table>
                
                
            </div>
        )
    }
}