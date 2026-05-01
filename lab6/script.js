async function getReport() {
    const select = document.getElementById('locationSelect').value;
    if (!select) {
        alert('Please select a location');
        return;
    }
}


const url = 'https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}';  

// Fetch data from the API
fetch(url) 
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    function displayData(data) {
    const today = data.results;
    const tomorrow = data.results; 

    document.getElementById("today").innerHTML = `
        Sunrise: ${today.sunrise}<br>
        Sunset: ${today.sunset}<br>
        Dawn: ${today.dawn}<br>
        Dusk: ${today.dusk}<br>
        Solar Noon: ${today.solar_noon}<br>
        Day Length: ${today.day_length}<br>
        Timezone: ${data.timezone}
    `;
}