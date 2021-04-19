import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper';

import muscleBody from "../../../static/assets/images/muscles-body.png";


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
    // let workoutList = []
    fetch("https://lmp-laz-workout-api.herokuapp.com/workout/get")
    .then(response => response.json())
    .then(data => console.log("Response from Workout API",data))
    .catch(error => console.log("error bringing in workouts", error))
}

// TODO --- onClickHandlers methods

   render() {

       return (
           <div className='workout-index-wrapper'>
               <h3>Please Select a Muscle Group to view all workouts in the index</h3>
               <ImageMapper
                src={muscleBody}
                width={800} 
                fillColor="Black" />
               
           </div>
       )
   }
}