function calculatePayee(grossIncome) {
    let payee = 0;
    return payee;
}


///////
function calculateNHIF(basicSalary) {
    let nhifDeduction = 0;
    return nhifDeduction;
}


///////
function calculateNSSF(basicSalary) {
    let nssfDeduction = 0;
    return nssfDeduction;
}


///////
function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    let grossSalary = basicSalary + benefits;


    let payee = calculatePayee(grossSalary);

    let nhif = calculateNHIF(basicSalary);


    let nssf = calculateNSSF(basicSalary);

    let netSalary = grossSalary - (payee + nhif + nssf);

    document.getElementById("result").innerHTML = "Net Salary: " + netSalary.toFixed(2);
}