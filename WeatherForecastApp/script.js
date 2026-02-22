const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherBox = document.getElementById('weatherBox');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

async function getWeather(city) {
    try {
        const response = await fetch(
            https://www.weatherlink.com/map
        );
        if (!response.ok) {
            alert("City not found!");
            return;
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert("Error fetching weather data!");
        console.error(error);
    }
}

function displayWeather(data) {
    cityName.innerText = `${data.name}, ${data.sys.country}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    description.innerText = data.weather[0].description;
    temperature.innerText = `Temperature: ${data.main.temp} °C`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    wind.innerText = `Wind Speed: ${data.wind.speed} m/s`;

    weatherBox.classList.remove('hide');
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
        cityInput.value = '';
    }
});

cityInput.addEventListener('keyup', (e) => {
    if (e.key === "Enter") searchBtn.click();
});
