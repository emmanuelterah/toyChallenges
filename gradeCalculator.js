
function calculateGrade() {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):")); //Created a variable named marks that prompts user to input student marks.

    if (isNaN(marks) || marks < 0 || marks > 100) { // Converts value into a number before testing it
        alert("Please enter marks between 0 and 100."); // Alerts user to input marks between 0 to 100.
        return; 
    }

    let grade; // Adds if/else/else if conditional statements that assigns value when either conditional statements are met.
    if (marks > 79) {
         grade = "A";
    } else if (marks >= 60 && marks <= 79) {
         grade = "B";
    } else if (marks >= 50 && marks <= 59) {
         grade = "C";
    } else if (marks >= 40 && marks <= 49) {
         grade = "D";
    } else {
         grade = "E";
    }

    alert("Student Grade: " + grade); // Alerts user on the grade scored based on value inputed.
}

calculateGrade(); // calls the function.
