const apiKey = "9875627d5a2380f453bc44d429d55397";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");   
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");   

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
                error.style.display = " block";
                weather.style.display = "none"
            }
        const data = await response.json();   


            document.querySelector(".city").textContent = data.name;
            document.querySelector(".condition").textContent = data.weather[0].main;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#x2103;";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed   
        + "km/hr";

            const weatherType = data.weather[0].main;

            // switch(temp){

            // }

            switch (weatherType) {
            case "Clouds":
                weatherIcon.src = "./Assests/cloudySun.png";
                break;
            case "Rain":
                weatherIcon.src = "./Assests/HeavyRain.png";
                break;
            case "ThunderStorm":
                weatherIcon.src = "./Assests/thunder.png";
                break;            
            case "Drizzle":
                weatherIcon.src = "./Assests/Drizzle.png";
                break;
            case "Clear":
                weatherIcon.src = "./Assests/clearSun.png";
                break;
            case "Mist":
                weatherIcon.src = "./Assests/mist.png";
                break;
            case "Snow":
                weatherIcon.src = "./Assests/snow.png";
                break;  
            case "Tornado":
                weatherIcon.src = "./Assests/tornado.png";
                break;   
            case "Haze":
                weatherIcon.src = "./Assests/haze.png";
                break;   
            case "Hail":
                weatherIcon.src = "./Assests/hail.png";
                break; 
            case "Smoke":
                weatherIcon.src = "./Assests/smoke.png";
                break;          
            case "Thunderstorm":
                weatherIcon.src = "./Assests/thunder.png";
                break;          
            default:
                // Handle unexpected weather conditions (optional)
                break;
            }

            weather.style.display = "block";
            error.style.display = "none";
        } catch (error) {
            console.error("Error:", error);
            // Handle errors here (e.g., display an error message to the user)
        }
        }

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = ''
});

searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkWeather(searchBox.value);
      searchBox.value = ''
    }
  });