import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper';

import muscleBody from "../../../static/assets/images/muscles-body.png";


export default class WorkoutINdex extends Component {
    constructor(props) {
       super(props)

       this.state = {}
   }

   render() {

       return (
           <div className='workout-index-wrapper'>
               This will be where the workout index will be placed
               <ImageMapper src={muscleBody} width={800}  />
               
           </div>
       )
   }
}