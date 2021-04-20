import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper';

import muscleBody from "../../../static/assets/images/body-front.png";


export default class WorkoutINdex extends Component {
    constructor(props) {
       super(props)

       this.state = {
           data: [],
           clickedUpperBody: "",
           clickedCore: "",
           clickedLowerBody: ""
       }


       this.componentDidMount = this.componentDidMount.bind(this)
   }

   componentDidMount(){
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(data => console.log("Response from Workout API",data))
    .catch(error => console.log("error bringing in workouts", error))
}

// TODO --- onClickHandlers methods

   render() {
       const Map = {
           name: "my-map",
           areas: [
               {name:"Upper Body", shape: "circle", coords: [150, 120, 20], fillColor: "red"},
               {name:"Core", shape: "circle", coords: [172, 175, 20], fillColor: "red"},
               {name:"Lower Body", shape: "circle", coords: [140, 290, 20], fillColor: "red"}
           ]

       }

       return (
           <div className='workout-index-wrapper'>
               <h3>Hover Over Muscle Group To Access All Workouts</h3>
               <ImageMapper src={muscleBody} width={350} 
                map={Map}
                />
               
           </div>
       )
   }
}