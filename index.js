const API_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=ec117e367de727a63b1b4dca7a98f7fa&units=metric&lang=es&q=';

const iconURL = 'https://openweathermap.org/img/wn/';

const fetchData = async (city) => {
    const response = await fetch(`${API_URL}${city}`);
    const data =  await response.json();
    // console.log(data);
    
    const container = document.createElement('div');
    container.className = 'container';

    const cityInfo = document.createElement('p');
    cityInfo.className = 'description';
    cityInfo.textContent = data.name;
    const countrySpan = document.createElement('span');
    countrySpan.textContent = data.sys.country;
    cityInfo.appendChild(countrySpan);
    container.appendChild(cityInfo);

    const temperature = document.createElement('p');
    temperature.className = 'temperature';
    temperature.textContent = `${Math.round(data.main.temp)} °C`;
    container.appendChild(temperature);

    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = `${iconURL}${data.weather[0].icon}.png`;
    container.appendChild(icon);

    const weatherInfo = document.createElement('p');
    weatherInfo.className = 'description';
    weatherInfo.textContent = data.weather[0].description;
    container.appendChild(weatherInfo);

    const app = document.getElementById('app');
    app.appendChild(container);
}

const cityValue = () => {
    const cityField = document.getElementById('city');
    const city = cityField.value;
    fetchData(city);
    cityField.value = '';
}

const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click', cityValue);