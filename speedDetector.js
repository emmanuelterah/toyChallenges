function calculatePoints(event) { 
    event.preventDefault(); // Prevents outputed value from defaulting to default value
    const speed = parseInt(document.getElementById('speed').value);
    const speedLimit = 70; //assigns immutable value to speed Limit
    const kmPerDemeritPoint = 5; //assigns immutable value to variable kmPerDemeritPoint
    const pointsThresholdForSuspension = 12; //assigns immutable value to variable pointsThresholdForSuspension.

    if (speed <= speedLimit) { //Conditional statements based on the difference speed value inputed and the constant speedLimit
        document.getElementById('result').innerText = "Ok";
        return;
    }

    const kmAboveLimit = speed - speedLimit; // assigns immutable value based on the difference in speedLimit value and speed value
    const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint); //assigns immutable value based on the division of kmAboveLimit and kmPerDemeritPoint 
                                                                        // math.floor rounds of value to nearest integer

    if (demeritPoints >= pointsThresholdForSuspension) { // conditional statements based on if demeritPoints is greater than or equal to pointsThresholdForSuspension
        document.getElementById('result').innerText = "License suspended"; //gets value inserted through id and outputs "License suspended" if the conditions are met
    } else {
        document.getElementById('result').innerText = "Points: " + demeritPoints; //gets value inserted through id and outputs "Points" if the conditions are met
    }
}

console.log(calculatePoints()); //Outputs value 