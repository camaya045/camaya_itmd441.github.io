const billInput = document.getElementById("bill");
const taxInput = document.getElementById("tax");
const tipInput = document.getElementById("tip");
const currencySelect = document.getElementById("toCurrency");
const tipResultInput = document.getElementById("tipResult");
const totalBillInput = document.getElementById("TotalBill");
const convertButton = document.getElementById("convertButton");



function convertUSDToEuros(usd) {
    const exchangeRate = 0.85; // 1 USD = 0.85 EUR
    return (usd * exchangeRate).toFixed(2);
}

function convertUSDToRupees(usd) {
    const exchangeRate = 92.43; // 1 USD = 92.43 INR (approximate)
    return (usd * exchangeRate).toFixed(2);
}

// Example usage
console.log(`$100 USD = €${convertUSDToEuros(100)}`);
console.log(`$100 USD = ₹${convertUSDToRupees(100)}`);

convertButton.addEventListener("click", function() {
    const billAmount = parseFloat(billInput.value);
    const taxPercentage = parseFloat(taxInput.value);
    const tipPercentage = parseFloat(tipInput.value);
    const selectedCurrency = currencySelect.value;})