const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");
const weatherContainer = document.querySelector("#weather");

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(cityInput.value);
  }
});

searchButton.addEventListener("click", function () {
  const city = cityInput.value; //inputa girilen değeri aldık
  //   console.log(input);
  getWeather(city);
});

function getWeather(city) {
  const apiKey = "df1dded566df713094de45f6c8e69842";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherData = data;
      //   console.log(weatherData);
      displayWeather(weatherData);
    })
    .catch((err) => console.log(err));
}
function displayWeather(weatherData) {
  cityInput.value = "";
  const weatherItems = document.createElement("div");
  weatherItems.classList.add("weather");
  const name = weatherData.name;
  const temp = Math.round(weatherData.main.temp);
  const description = weatherData.weather[0].description;
  const weatherHTML = `
 <h2>${name}</h2>
 <p id="temp">${temp}° </p>
 <p id= "description">${description}</p>
 `;
  weatherContainer.innerHTML = weatherHTML;
  weatherContainer.appendChild(weatherItems);
}
