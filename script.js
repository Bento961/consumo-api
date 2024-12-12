async function getExchangeRates() {
    const url = "https://api.exchangerate-api.com/v4/latest/USD";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados.");
        }
        const data = await response.json();
        displayExchangeRates(data);
    } catch (error) {
        document.getElementById("exchange-rates").innerHTML = `<p>${error.message}</p>`;
    }
}

function displayExchangeRates(data) {
    const baseCurrency = data.base;
    const date = data.date;
    const rates = data.rates;

    let html = `<p>Base: ${baseCurrency} (Data: ${date})</p>`;
    html += "<ul>";
    for (const [currency, rate] of Object.entries(rates)) {
        html += `<li>${currency}: ${rate}</li>`;
    }
    html += "</ul>";

    document.getElementById("exchange-rates").innerHTML = html;
}

// Carrega as taxas de câmbio ao abrir a página
getExchangeRates();
