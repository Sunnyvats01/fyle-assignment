
let button = document.querySelector("#button");

function calculateTax() {

    let age = parseInt(document.getElementById("age").value);
    let grossAnnualIncome = parseInt(document.getElementById("grossAnnualIncome").value);
    let extraIncome = parseInt(document.getElementById("extraIncome").value);
    let deductions = parseInt(document.getElementById("deductions").value);

    let total = grossAnnualIncome + extraIncome - deductions;


    if (isNaN(age) || isNaN(grossAnnualIncome) || isNaN(extraIncome) || isNaN(deductions)) {


        return;
    }

    let tax = calculateTaxAmount(age, grossAnnualIncome, extraIncome, deductions);

    document.getElementById("taxResult").textContent = total - parseInt(tax);
    document.getElementById("myModal").style.display = "block";
}

function calculateTaxAmount(age, grossAnnualIncome, extraIncome, deductions) {
    let overallIncome = grossAnnualIncome + extraIncome - deductions;



    if (overallIncome <= 800000) {
        return 0;
    } else {
        let taxableIncome = overallIncome - 800000;
        let taxRate;
        if (age < 40) {
            taxRate = 0.3;
        } else if (age >= 40 && age < 60) {
            taxRate = 0.4;
        } else {
            taxRate = 0.1;
        }
        let taxAmount = taxRate * taxableIncome;
        return taxAmount;
    }
}

// input validation

document.getElementById("age").addEventListener("input", validateInput);
document.getElementById("grossAnnualIncome").addEventListener("input", validateInput);
document.getElementById("extraIncome").addEventListener("input", validateInput);
document.getElementById("deductions").addEventListener("input", validateInput);

function validateInput() {
    let ageInput = document.getElementById("age");
    let grossAnnualIncomeInput = document.getElementById("grossAnnualIncome");
    let extraIncomeInput = document.getElementById("extraIncome");
    let deductionsInput = document.getElementById("deductions");

    if (isNaN(parseInt(ageInput.value))) {
        showErrorIcon(ageInput, "ageErrorIcon");
    } else {
        hideErrorIcon(ageInput, "ageErrorIcon");
    }

    if (isNaN(parseInt(grossAnnualIncomeInput.value))) {
        showErrorIcon(grossAnnualIncomeInput, "incomeErrorIcon");
    } else {
        hideErrorIcon(grossAnnualIncomeInput, "incomeErrorIcon");
    }

    if (isNaN(parseInt(extraIncomeInput.value))) {
        showErrorIcon(extraIncomeInput, "extraIncomeErrorIcon");
    } else {
        hideErrorIcon(extraIncomeInput, "extraIncomeErrorIcon");
    }

    if (isNaN(parseInt(deductionsInput.value))) {
        showErrorIcon(deductionsInput, "deductionsErrorIcon");
    } else {
        hideErrorIcon(deductionsInput, "deductionsErrorIcon");
    }
}

function showErrorIcon(inputElement, iconId) {

    document.getElementById(iconId).style.display = "inline";
    inputElement.classList.add("error-input");
}

function hideErrorIcon(inputElement, iconId) {

    document.getElementById(iconId).style.display = "none";
    inputElement.classList.remove("error-input");
}


document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
});

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
