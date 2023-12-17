function calculatePoints(event) {
    event.preventDefault();
    const speed = parseInt(document.getElementById('speed').value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsThresholdForSuspension = 12;

    if (speed <= speedLimit) {
        document.getElementById('result').innerText = "Ok";
        return;
    }

    const kmAboveLimit = speed - speedLimit;
    const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint);

    if (demeritPoints >= pointsThresholdForSuspension) {
        document.getElementById('result').innerText = "License suspended";
    } else {
        document.getElementById('result').innerText = "Points: " + demeritPoints;
    }
}