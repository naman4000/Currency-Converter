// Define exchange rates (replace with actual rates)
const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.14,
};

// Function to populate currency dropdowns
function populateCurrencies() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    for (const currency in exchangeRates) {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.text = currency;
        fromCurrencySelect.add(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.text = currency;
        toCurrencySelect.add(option2);
    }
}

// Function to convert currency
function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        alert('Invalid currency selection.');
        return;
    }

    const result = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

// Populate currency dropdowns on page load
document.addEventListener('DOMContentLoaded', function () {
    populateCurrencies();
});
