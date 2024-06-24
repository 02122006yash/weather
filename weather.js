

const apiKey = '92883ebdbad92a3c590b1e2b2d61f4a1';

const getWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateMainWeather(data);
        })
        .catch(err => console.error(err));
}

const updateMainWeather = (data) => {
    document.getElementById('cityName').innerHTML = data.name;
    document.getElementById('temp').innerHTML = `${data.main.temp} °C`;
    document.getElementById('feels-like').innerHTML = `${data.main.feels_like} °C`;
    document.getElementById('humidity').innerHTML = `${data.main.humidity} %`;
    document.getElementById('pressure').innerHTML = `${data.main.pressure} hPa`;
    document.getElementById('wind-speed').innerHTML = `${data.wind.speed} m/s`;
    document.getElementById('Wind_deg').innerHTML = `${data.wind.deg}°`;
    document.getElementById('sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.getElementById('sunset').innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    document.getElementById('temp_max').innerHTML = `${data.main.temp_max} °C`;
    document.getElementById('temp_min').innerHTML = `${data.main.temp_min} °C`;
}

const updateCityWeather = (data, city) => {
    document.getElementById(`${city}-temp`).innerHTML = `${data.main.temp} °C`;
    document.getElementById(`${city}-feels-like`).innerHTML = `${data.main.feels_like} °C`;
    document.getElementById(`${city}-humidity`).innerHTML = `${data.main.humidity} %`;
    document.getElementById(`${city}-pressure`).innerHTML = `${data.main.pressure} hPa`;
    document.getElementById(`${city}-wind-speed`).innerHTML = `${data.wind.speed} m/s`;
    document.getElementById(`${city}-wind-deg`).innerHTML = `${data.wind.deg}°`;
    document.getElementById(`${city}-temp-max`).innerHTML = `${data.main.temp_max} °C`;
    document.getElementById(`${city}-temp-min`).innerHTML = `${data.main.temp_min} °C`;
    document.getElementById(`${city}-sunrise`).innerHTML = `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    document.getElementById(`${city}-sunset`).innerHTML = `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
}

const getWeatherForCity = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            updateCityWeather(data, city.toLowerCase());
        })
        .catch(err => console.error(err));
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(document.getElementById("city").value);
});

// Initial weather data
getWeather("Delhi");

// Weather data for other cities
getWeatherForCity("Shanghai");
getWeatherForCity("Boston");
getWeatherForCity("London");

// Add event listeners for city links in the dropdown
document.querySelectorAll('.city-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        getWeather(e.target.getAttribute('data-city'));
    });
});



const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


const updateBackground = (temp) => {
    const backgroundContainer = document.getElementById('background-container');
    if (temp > 30) {
        backgroundContainer.style.backgroundImage = 'url("11machin-illo-superJumbo-v3.webp")'; // Check path to hot weather background image
    } else {
        backgroundContainer.style.backgroundImage = 'url("11machin-illo-superJumbo-v3.webp")'; // Check path to default background image
    }
};