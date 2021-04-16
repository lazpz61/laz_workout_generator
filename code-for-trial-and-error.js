// Sampple Data that im looking to receive from DB
let workout = [
    {
        "equiptment": "Body Weight",
        "exercise": "Pushups",
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "",
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "SitUps",
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "HandStand",
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Ab Crunches",
        "muscle_group": "Lower Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Squats",
        "muscle_group": "Lower Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Calf Raisers",
        "muscle_group": "Lower Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Mountain Climbers",
        "muscle_group": "Lower Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Jumping Jacks",
        "muscle_group": "Lower Body"
    }
]
// Might need this at an individual level
let workouts =  workout.find(workout => workout.equiptment === "Body Weight" && workout.muscle_group === "Upper Body");



let workouts = workout.filter(workout => workout.equiptment === "Body Weight");

console.log(workouts);

let muscleGroup = workout.filter(workout => workout.muscle_group === "Upper Body");

console.log(muscleGroup);


// This gave me the desired result for multiple keys this returns an array of objects as well

let muscleGroup = workout.filter(workout => workout.muscle_group === "Upper Body" && workout.equiptment === "Bench");

console.log(muscleGroup);

// Now figure out how to extract each workout and give a random 5 based on Style select


https://stackoverflow.com/questions/31117260/how-to-get-a-list-of-key-values-from-array-of-objects-javascript

// will need this loop for when I need to pull out a certain amount of workouts

// for (let i = 0; i < 6; i++) {
    // console.log(workout[i]); <-- the bracket may not be used since we will be working with an array of objects
// }