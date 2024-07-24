# Weather App
Hello everybody! 👋 </br>
✨ Welcome to the Weather App! This is a simple weather application that allows users to search for the current weather conditions in any city. The app uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly format.


## 👀 Overview

### 📷 Screenshot

![screencapture-127-0-0-1-3000-index-html-2024-07-24-10_50_40](https://github.com/user-attachments/assets/1206e32f-7a8b-4eea-9ec9-55be66a5f941)
![screencapture-127-0-0-1-3000-index-html-2024-07-24-10_50_53](https://github.com/user-attachments/assets/b9e5e510-3c5c-4340-a82d-6689a99f41c3)


### 🔗 Links

- https://tucecifci.github.io/Weather-App/
  
## My process

### 💡 Built with

#### Frontend
- HTML5: Provides the basic structure of the app, ensuring it is correctly displayed in modern web browsers.
- CSS3: Used for styling the app, making it visually appealing and ensuring a responsive design. Includes use of Flexbox for layout and custom fonts for modern aesthetics.
- JavaScript (ES6): Adds interactivity to the app. Utilizes modern JavaScript features such as arrow functions, template literals, and fetch API for making HTTP requests.
#### API
- OpenWeatherMap API: A third-party API that provides weather data. Used to fetch real-time weather information based on the city name entered by the user.
#### Development Tools
- Visual Studio Code: A powerful, lightweight code editor used for writing and managing the project’s codebase.
- Git: Version control system used to track changes in the source code.
- GitHub: Hosting service for version control using Git. Used to store the project repository and collaborate with others.


### 🧠 What I learned

Creating this weather app provided me with several valuable learning experiences:

- API Integration: Learned how to interact with a third-party API (OpenWeatherMap) to fetch and display data.
- Asynchronous JavaScript: Gained a deeper understanding of handling asynchronous operations using the fetch API and promises.
- DOM Manipulation: Improved skills in manipulating the Document Object Model (DOM) to dynamically update the user interface based on user input and fetched data.
- Responsive Design: Enhanced knowledge of responsive web design principles to ensure the app looks good on both desktop and mobile devices.
- Error Handling: Learned to implement basic error handling to manage API request failures and invalid user inputs.
- Code Organization: Practiced organizing JavaScript code in a modular and readable manner.

```javascript
  unction getWeather(city) {
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
```

### 👩🏼‍💻 Features

The Weather App offers the following features:

- Search for current weather by city name
- Display temperature, weather description, and humidity
- Responsive design for both desktop and mobile devices


### 🤔 How to Use

- Enter the name of a city in the input field.
- Press the Enter key or click the Search button.
- The current weather conditions for the specified city will be displayed.

  
### 🤌🏻 Useful resources

- https://openweathermap.org/

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
