const apiKey = '92883ebdbad92a3c590b1e2b2d61f4a1';

function fetchWeather(city, cardIdPrefix) {
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
      document.getElementById(`${cardIdPrefix}-temp`).textContent = `${temperature} °C`;
      document.getElementById(`${cardIdPrefix}-feels-like`).textContent = `${feelsLike} °C`;
      document.getElementById(`${cardIdPrefix}-humidity`).textContent = `${humidity} %`;
      document.getElementById(`${cardIdPrefix}-pressure`).textContent = `${pressure} hPa`;
      document.getElementById(`${cardIdPrefix}-wind-speed`).textContent = `${windSpeed} m/s`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.querySelectorAll('.city-link').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default link behavior
    const city = event.target.getAttribute('data-city');
    fetchWeather(city, city.toLowerCase());
  });
});

document.getElementById('search-form').addEventListener('submit', event => {
  event.preventDefault(); // Prevent the form from submitting
  const searchQuery = document.getElementById('search-input').value;
  if (searchQuery) {
    fetchWeather(searchQuery, 'delhi');
    fetchWeather(searchQuery, 'iglas');
    fetchWeather(searchQuery, 'mathura');
  }
});

// Fetch initial weather data for the default cities
fetchWeather('Delhi', 'delhi');
fetchWeather('Iglas', 'iglas');
fetchWeather('Mathura', 'mathura');

// Fetch weather data for common places
const commonPlaces = ['Shanghai', 'Boston', 'Lucknow', 'United Kingdom', 'Kolkata', 'Mumbai'];
commonPlaces.forEach(place => {
  const placeId = place.toLowerCase().replace(' ', '-');
  fetchWeather(place, placeId);
});
