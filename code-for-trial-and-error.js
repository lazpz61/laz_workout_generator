// Sampple Data that im looking to receive from DB
let workout = [
    {
        "equiptment": "Body Weight",
        "exercise": "Pushups",
        "id": 1,
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Pushups",
        "id": 2,
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "SitUps",
        "id": 3,
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "HandStand",
        "id": 4,
        "muscle_group": "Upper Body"
    },
    {
        "equiptment": "Body Weight",
        "exercise": "Ab Crunches",
        "id": 5,
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