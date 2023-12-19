function calculatePayee(grossIncome) { //created a function named calculatePayee 
    let payee = 0;
    if (grossIncome <= 24000) { // uses an if conditional statements that if the conditions are met, output payee value
      payee = grossIncome * 0.1; // deducts 10% of gross income if salary is less than or equal to 24,000
    }
    else if (grossIncome >=24001 && grossIncome <=32333) { //deducts 25% of gross income if salary is greater than or equal to 24,001 && if salary is less than or equal to 32333
      payee = grossIncome * 0.25;
    }
    else if (grossIncome >=32334 && grossIncome <=500000) {//deducts 30% of gross income if salary is greater than or equal to 24,001 && if salary is less than or equal to 32333
      payee = grossIncome * 0.3;
    }
    else if (grossIncome >=500001 && grossIncome <=800000) {//deducts 32.5% of gross income if salary is greater than or equal to 24,001 && if salary is less than or equal to 32333
      payee = grossIncome * 0.325;
    }
    else {
      payee = grossIncome * 0.35; //deducts 35% of gross income if salary is greater than or equal to 24,001 && if salary is less than or equal to 32333
    }
    return payee; 
}


///////
function calculateNHIF(grossIncome) { // created a function named calculateNHIF that passes the "grossIncome" as an argument
    let nhifDeduction = 0;
    if (grossIncome <= 5999) { // uses the if / else / else if statements that if met deduct the NHIF deductions from the gross Income.
        deduction = 150;
      } 
      else if (grossIncome >= 6000 && grossIncome <= 7999) { // deducts 300 if the conditions are met.
          nhifDeduction = 300;
      } 
      else if (grossIncome >= 8000 && grossIncome <= 11999) {// deducts 400 if the conditions are met.
          nhifDeduction = 400;
      } 
      else if (grossIncome >= 12000 && grossIncome <= 14999) {// deducts 500 if the conditions are met.
          nhifDeduction = 500;
      } 
      else if (grossIncome >= 15000 && grossIncome <= 19999) {// deducts 600 if the conditions are met.
          nhifDeduction = 600;
      } 
      else if (grossIncome >= 20000 && grossIncome <= 24999) {// deducts 750 if the conditions are met.
          nhifDeduction = 750;
      } 
      else if (grossIncome >= 25000 && grossIncome <= 29999) {// deducts 850 if the conditions are met.
          nhifDeduction = 850;
      } 
      else if (grossIncome>= 30000 && grossIncome <= 34999) {// deducts 900 if the conditions are met.
          nhifDeduction = 900;
      } 
      else if (grossIncome >= 35000 && grossIncome <= 39999) {// deducts 950 if the conditions are met.
          nhifDeduction = 950;
      }
      else if (grossIncome >= 40000 && grossIncome <= 44999) { // deducts 1000 if the conditions are met.
          nhifDeduction = 1000;
      } 
      else if (grossIncome >= 45000 && grossIncome <= 49999) {// deducts 1100 if the conditions are met.
          nhifDeduction = 1100;
      } 
      else if (grossIncome >= 50000 && grossIncome <= 59999) {// deducts 1200 if the conditions are met.
          nhifDeduction = 1200;
      } 
      else if (grossIncome >= 60000 && grossIncome <= 69999) {// deducts 1300 if the conditions are met.
          nhifDeduction = 1300;
      } 
      else if (grossIncome >= 70000 && grossIncome <= 79999) {// deducts 1400 if the conditions are met.
          nhifDeduction = 1400;
      } 
      else if (grossIncome >= 80000 && grossIncome <= 89999) {// deducts 1500 if the conditions are met.
          nhifDeduction = 1500;
      } 
      else if (grossIncome >= 90000 && grossIncome <= 99999) {// deducts 1600 if the conditions are met.
          nhifDeduction = 1600;
      } 
      else {
          nhifDeduction = 1700;
    }
    return nhifDeduction;
}


///////
function calculateNSSF(grossIncome) { // created a function named calculateNSSF that passes the "gross Income" as an argument
    let nssfDeduction = 400;
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

calculateNetSalary (); // calls the function named calculateNetSalary