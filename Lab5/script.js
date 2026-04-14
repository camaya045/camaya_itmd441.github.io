const billInput = document.getElementById("bill");
const taxInput = document.getElementById("tax");
const tipInput = document.getElementById("tip");
const currencySelect = document.getElementById("toCurrency");
const tipResultInput = document.getElementById("tipResult");
const totalBillInput = document.getElementById("TotalBill");
const convertButton = document.getElementById("convertButton");
const output = document.getElementById("tipValue");

function convertUSDToEuros(usd) {
    const exchangeRate = 0.85; // 1 USD = 0.85 EUR
    return (usd * exchangeRate).toFixed(2);
}

function convertUSDToRupees(usd) {
    const exchangeRate = 92.43; // 1 USD = 92.43 INR (approximate)
    return (usd * exchangeRate).toFixed(2);
}

convertButton.addEventListener("click", function() {
    const bill = parseFloat(billInput.value);

    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }
    //tax on bill (11%)
    const taxAmount = bill * 0.11;
    const totalWithTax = bill + taxAmount;
    taxInput.value = totalWithTax.toFixed(2);
    //tip slider
    const tipAmount = bill * (tipPercentage / 100);
    tipInput.oninput = function() {
        output.textContent = this.value;
    };
   
    let convertedTip, convertedTotal;

    if (currencySelect.value === "EUR") {
        convertedTip = convertUSDToEuros(tipAmount);
        convertedTotal = convertUSDToEuros(bill + taxAmount + tipAmount);
    } else if (currencySelect.value === "INR") {
        convertedTip = convertUSDToRupees(tipAmount);
        convertedTotal = convertUSDToRupees(totalWithTax + tipAmount);
    }else {
        convertedTip = tipAmount.toFixed(2);
        convertedTotal = (totalWithTax + tipAmount).toFixed(2);
    }
    tipResultInput.value = convertedTip;
    totalBillInput.value = convertedTotal;
})