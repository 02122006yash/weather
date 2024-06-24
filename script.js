// const apiKey = '92883ebdbad92a3c590b1e2b2d61f4a1';
// const city = 'delhi';
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch(apiUrl)
//   .then(response => response.json())
  
//   .then((response=>{
//      console.log(response)
//      feels_like=response.feels_like
//      humidity=response.humidity
//      pressure=response.pressure
//      temp=response.temp
//     wind_speed=response.wind_speed

//   }))
//   .catch(error => {
//     console.error('Error:', error);
//   });



const apiKey = '92883ebdbad92a3c590b1e2b2d61f4a1';

function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the necessary data
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const windSpeed = data.wind.speed;

      // Update the HTML elements with the fetched data
      document.getElementById('city-name').textContent = city.toUpperCase();
      document.getElementById('temp').textContent = `${temperature} °C`;
      document.getElementById('feels-like').textContent = `${feelsLike} °C`;
      document.getElementById('humidity').textContent = `${humidity} %`;
      document.getElementById('pressure').textContent = `${pressure} hPa`;
      document.getElementById('wind-speed').textContent = `${windSpeed} m/s`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.querySelectorAll('.city-link').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default link behavior
    const city = event.target.getAttribute('data-city');
    const cardId = city.toLowerCase();
    fetchWeather(city,cardId);
  });
});

// Fetch initial weather data for the default city (e.g., Delhi)
fetchWeather('Delhi', 'delhi');
fetchWeather('Iglas', 'iglas');
fetchWeather('Mathura', 'mathura');
