import './styles.scss';
$(document).ready(function(){

  function getBackground(cityState) {
    $.get(`https://sweather-weather.herokuapp.com/api/v1/backgrounds?location=${cityState}`, function(data, status) {
      let backgroundUrl = data["data"]["attributes"]["background_url"];
      $('body').css('background-image', `url(${backgroundUrl})`);
    });
  };

  function getCurrentForecast(cityState) {
    $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
      let currentForecastData = data["data"]["attributes"]["current_weather"];
      let dailyForecastData = data["data"]["attributes"]["daily_weather"];
      let currentTemp = currentForecastData["temperature"];
      let currentSummary = currentForecastData["summary"];
      let highTemp = dailyForecastData[0]["temperatureHigh"];
      let lowTemp = dailyForecastData[0]["temperatureLow"];
      let currentDate = currentForecastData["date"];
      $(".cityState").text(cityState);
      $(".currentTemp").text(`${currentTemp}` + "°");
      $(".currentSummary").text(currentSummary);
      $(".highTemp").text("High: " + `${highTemp}`+ "°");
      $(".lowTemp").text("Low: " + `${lowTemp}`+ "°");
      $(".currentDate").text(currentDate);
    });
  }

  function getDailyForecast(cityState) {
    $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
      let dailyForecastData = data["data"]["attributes"]["daily_weather"];
      let currentForecastData = data["data"]["attributes"]["current_weather"];
      let todayForecastSummary = dailyForecastData[0]["summary"];
      let tomorrowForecastSummary = dailyForecastData[1]["summary"];
      let shortCurrentSummary = currentForecastData["summary"];
      let feelsLikeTemp = currentForecastData["apparentTemperature"];
      let uvIndex = currentForecastData["uvIndex"];
      let humidity = currentForecastData["humidity"];
      let visibility = currentForecastData["visibility"];
      $(".todayForecastSummary").text(todayForecastSummary);
      $(".tomorrowForecastSummary").text(tomorrowForecastSummary);
      $(".shortCurrentSummary").text(shortCurrentSummary);
      $(".feelsLikeTemp").text("Feels like: " + `${feelsLikeTemp}` + "°");
      $(".humidity").text(`${humidity * 100}` + "%");
      $(".visibility").text(`${visibility}`);
    });
  }

  function getHourlyForecast(cityState) {
    $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
      let dailyForecastData = data["data"]["attributes"]["daily_weather"];
      let currentForecastData = data["data"]["attributes"]["current_weather"];
      let hourlyForecastData = data["data"]["attributes"]["hourly_weather"];
      $(".hour1Temp").text(`${hourlyForecastData[0]["temperature"]}` + "°")
      $(".hour2Temp").text(`${hourlyForecastData[1]["temperature"]}` + "°")
      $(".hour3Temp").text(`${hourlyForecastData[2]["temperature"]}` + "°")
      $(".hour4Temp").text(`${hourlyForecastData[3]["temperature"]}` + "°")
      $(".hour5Temp").text(`${hourlyForecastData[4]["temperature"]}` + "°")
      $(".hour6Temp").text(`${hourlyForecastData[5]["temperature"]}` + "°")
      $(".hour7Temp").text(`${hourlyForecastData[6]["temperature"]}` + "°")
      $(".hour8Temp").text(`${hourlyForecastData[7]["temperature"]}` + "°")
      $(".hour1Time").text(hourlyForecastData[0]["time"])
      $(".hour2Time").text(hourlyForecastData[1]["time"])
      $(".hour3Time").text(hourlyForecastData[2]["time"])
      $(".hour4Time").text(hourlyForecastData[3]["time"])
      $(".hour5Time").text(hourlyForecastData[4]["time"])
      $(".hour6Time").text(hourlyForecastData[5]["time"])
      $(".hour7Time").text(hourlyForecastData[6]["time"])
      $(".hour8Time").text(hourlyForecastData[7]["time"])
    });
  }


  $("#submitCityStateButton").click(function() {
    event.preventDefault();
    const cityState = $('#cityState').val();
    getBackground(cityState);
    getCurrentForecast(cityState);
    getDailyForecast(cityState);
    getHourlyForecast(cityState);
  });

});
