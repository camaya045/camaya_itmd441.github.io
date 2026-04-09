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