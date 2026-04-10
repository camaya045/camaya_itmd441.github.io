const bill = document.getElementById("bill");
const tax = document.getElementById("tax");
const tip = document.getElementById("tip");
const currencySelect = document.getElementById("toCurrency");
const tipResult = document.getElementById("tipResult");
const totalBill = document.getElementById("TotalBill");
const convertButton = document.getElementById("convertButton");

cconvertButton.addEventListener("click", function () {
    const bill = parseFloat(billInput.value);

    // tax (11%)
    const tax = bill * 0.11;
    taxInput.value = (bill + tax).toFixed(2);

    // tip (range slider is %)
    const tipPercent = tipInput.value;
    const tipAmount = bill * (tipPercent / 100);

    // currency selection
    let convertedTip, convertedTotal;

    if (currencySelect.value === "EUR") {
        convertedTip = convertUSDToEuros(tipAmount);
        convertedTotal = convertUSDToEuros(bill + tax + tipAmount);
    } else if (currencySelect.value === "INR") {
        convertedTip = convertUSDToRupees(tipAmount);
        convertedTotal = convertUSDToRupees(bill + tax + tipAmount);
    } else {
        convertedTip = tipAmount.toFixed(2);
        convertedTotal = (bill + tax + tipAmount).toFixed(2);
    }

    tipResultInput.value = convertedTip;
    totalBillInput.value = convertedTotal;
});