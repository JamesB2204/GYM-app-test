let weightSession = [];
var server_info;

class Exercise {
    constructor(exercise, weight, reps) {
        this.exercise = exercise;
        this.weight = weight;
        this.reps = reps;
    }
}

function collectNewLift() {
    var userLift = document.getElementById("userLift").value;
    var userWeight = document.getElementById("userWeight").value;
    var repCount = document.getElementById("repCount").value;
    console.log(userLift + " " + userWeight + " " + repCount);
    var newExercise = new Exercise(userLift, userWeight, repCount);
    weightSession.push(newExercise);
    sendRequest(newExercise)
}

async function sendRequest(information) {
    let dataJSON = JSON.stringify(information);
    let response = await fetch("http://localhost:8000/api/resourceGET", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataJSON
    })
    let data = await response.json();
    console.log("Response:", data);
}

const dataToSend = {
    key1: 'value1',
    key2: 'value2',
  };
  
  fetch('http://localhost:8000/api/resource', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    //server_info = data;
    console.log('Response:', data);
    //console.log(JSON.stringify(server_info))
})
.catch(error => {
    console.error('Error:', error);
});


