function calculatePayee(grossIncome) { //created a function named calculatePayee 
    let payee = 0;
    return payee;
}


///////
function calculateNHIF(basicSalary) { // created a function named calculateNHIF that passes the "basic salary" as an argument
    let nhifDeduction = 0;
    return nhifDeduction;
}


///////
function calculateNSSF(basicSalary) { // created a function named calculateNSSF that passes the "basic salary" as an argument
    let nssfDeduction = 0;
    return nssfDeduction;
}


///////
function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementById("basicSalary").value); // created a variable named basicSalary that gets input value from ID
    let benefits = parseFloat(document.getElementById("benefits").value); // created a variable named benefits that gets input value from ID

    let grossSalary = basicSalary + benefits; // created a variable named grossSalary that outputs the added value of basicSalary and benefits


    let payee = calculatePayee(grossSalary); // created a variable that is based on the function calculatePayee

    let nhif = calculateNHIF(basicSalary); // created a variable that is based on the function calculateNHIF


    let nssf = calculateNSSF(basicSalary); // created a variable that is based on the function calculateNSSF

    let netSalary = grossSalary - (payee + nhif + nssf); //created a variable named netSalary that outputs the value of deductions based on the gross salary 

    document.getElementById("result").innerHTML = "Net Salary: " + netSalary.toFixed(2); // gets value from ID and returns the Net Salary value
}

calculateNetSalary(); //outputs value