const billInput = document.getElementById("bill");
const taxInput = document.getElementById("tax");
const tipInput = document.getElementById("tip");
const currencySelect = document.getElementById("toCurrency");
const tipResultInput = document.getElementById("tipResult");
const totalBillInput = document.getElementById("TotalBill");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function() {
    const billAmount = parseFloat(billInput.value);
    //tax on bill (11%)
    const taxAmount = billAmount * 0.11;
    const totalWithTax = billAmount + taxAmount;
    taxInput.value = totalWithTax.toFixed(2);
    //tip slider
    const tipPercentage = parseFloat(tipInput.value);
    const tipAmount = billAmount * (tipPercentage / 100);
    //curency seltciom
    let convertedTip, convertedTotal;

    if (currencySelect.value === "EUR") {
        convertedTip = convertUSDToEuros(tipAmount);
        convertedTotal = convertUSDToEuros(bill + tax + tipAmount);
    } else if (currencySelect.value === "INR") {
        convertedTip = convertUSDToRupees(tipAmount);
        convertedTotal = convertUSDToRupees(bill + tax + tipAmount);
    }else {
        convertedTip = tipAmount.toFixed;
        convertedTotal = (bill + tax + tipAmount).toFixed(2);
    }
    tipResultInput.value = convertedTip;
    totalBillInput.value = convertedTotal;
})