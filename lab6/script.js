async function getReport() {
    const errorDiv = document.getElementById("error");
    errorDiv.classList.add("hidden");
    errorDiv.innerText = "";

    const select = document.getElementById("locationSelect").value;

    if (!select) {
        showError("Please select a location.");
        return;
    }

    const [lat, lng] = select.split(",");

    try {
        // TODAY
        const todayRes = await fetch(`https://sunrisesunset.io/api/?lat=${lat}&lng=${lng}`);
        const todayData = await todayRes.json();

        if (todayData.status !== "OK") {
            throw new Error("API error");
        }

        // TOMORROW
        const tomorrowRes = await fetch(`https://sunrisesunset.io/api/?lat=${lat}&lng=${lng}&date=tomorrow`);
        const tomorrowData = await tomorrowRes.json();

        if (tomorrowData.status !== "OK") {
            throw new Error("API error");
        }

        displayData(todayData.results, tomorrowData.results, todayData.timezone);

    } catch (error) {
        showError("Failed to fetch data. Please try again.");
    }
}

function displayData(today, tomorrow, timezone) {
    document.getElementById("today").innerHTML = `
        <p>Sunrise: ${today.sunrise}</p>
        <p>Sunset: ${today.sunset}</p>
        <p>Dawn: ${today.dawn}</p>
        <p>Dusk: ${today.dusk}</p>
        <p>Solar Noon: ${today.solar_noon}</p>
        <p>Day Length: ${today.day_length}</p>
        <p>Timezone: ${timezone}</p>
    `;

    document.getElementById("tomorrow").innerHTML = `
        <p>Sunrise: ${tomorrow.sunrise}</p>
        <p>Sunset: ${tomorrow.sunset}</p>
        <p>Dawn: ${tomorrow.dawn}</p>
        <p>Dusk: ${tomorrow.dusk}</p>
        <p>Solar Noon: ${tomorrow.solar_noon}</p>
        <p>Day Length: ${tomorrow.day_length}</p>
        <p>Timezone: ${timezone}</p>
    `;
}

function showError(message) {
    const errorDiv = document.getElementById("error");
    errorDiv.innerText = message;
    errorDiv.classList.remove("hidden");
}