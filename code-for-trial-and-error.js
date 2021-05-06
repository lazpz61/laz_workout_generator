// Might need this at an individual level
let workouts =  workout.find(workout => workout.equiptment === "Body Weight" && workout.muscle_group === "Upper Body");



let workouts = workout.filter(workout => workout.equiptment === "Body Weight");

console.log(workouts);

let muscleGroup = workout.filter(workout => workout.muscle_group === "Upper Body"); // TODO:  might be used individually to get workouts by click on the workout index. !!!!!

console.log(muscleGroup);


// This gave me the desired result for multiple keys this returns an array of objects as well

let muscleGroup = workout.filter(workout => workout.muscle_group === "Upper Body" && workout.equiptment === "Bench");


let muscleGroup = workout.filter(workout => workout.muscle_group === this.state.optionMuscle && workout.equiptment === this.state.optionEquiptment);

console.log(muscleGroup);

// Now figure out how to extract each workout and give a random 5 based on Style select


https://stackoverflow.com/questions/31117260/how-to-get-a-list-of-key-values-from-array-of-objects-javascript

// will need this loop for when I need to pull out a certain amount of workouts

for (let i = 0; i < 6; i++) {
    console.log(workout[i]); 
}   <-- the bracket may not be used since we will be working with an array of objects


// Might use for the Workout index
let workoutcontainer = []
for (let i=0; i<5; i++) {
    let randomWorkout = listofWorkouts[Math.floor(Math.random() * listofWorkouts.length)];
    workoutcontainer.push(randomWorkout)
}




// to find the location on the page for image mapper

  document.addEventListener('mousemove', (e) =>{
    console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`);
});

// Reserved for Workout-index

image (locations) :

Upper Body:  Top Left x:158 y:224 / Bottom Right x:244 y:267

Core: Top Left x:182 y:280 / Botttom Right x:241 y:368

LowerBody: Left LegTop x:163 y:369 / Left Leg bottom x:172 y:626 / Right Leg Top x:219 y:411 Right Leg Top x: 219 Y:411 Right Leg Bottom x:262 y:638

