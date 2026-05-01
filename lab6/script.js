const url = 'https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873';  

// Fetch data from a JSON URL
fetch(url) 
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  // Process the fetched data here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });