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
      let currentTime = currentForecastData["time"];
      $(".cityState").text(cityState);
      $(".currentTemp").text(`${currentTemp}` + "°");
      $(".currentSummary").text(currentSummary);
      // $(".highTemp").text("High: " + `${highTemp}`+ "°");
      // $(".lowTemp").text("Low: " + `${lowTemp}`+ "°");
      $(".currentDateTime").text(`${currentDate}` + ", " + `${currentTime}`);
      // $(".currentTime").text(currentTime);
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

  function getExtendedForecast(cityState) {
    $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
      let dailyForecastData = data["data"]["attributes"]["daily_weather"];
      let currentForecastData = data["data"]["attributes"]["current_weather"];
      let hourlyForecastData = data["data"]["attributes"]["hourly_weather"];
      $(".dayOfWeek1").text(dailyForecastData[0]["dayofweek"])
      $(".dayOfWeek2").text(dailyForecastData[1]["dayofweek"])
      $(".dayOfWeek3").text(dailyForecastData[2]["dayofweek"])
      $(".dayOfWeek4").text(dailyForecastData[3]["dayofweek"])
      $(".dayOfWeek5").text(dailyForecastData[4]["dayofweek"])
      $(".dayOfWeek6").text(dailyForecastData[5]["dayofweek"])
      $(".dayOfWeek7").text(dailyForecastData[6]["dayofweek"])
      $(".tempHigh1").text(`${dailyForecastData[0]["temperatureHigh"]}` + "°")
      $(".tempHigh2").text(`${dailyForecastData[1]["temperatureHigh"]}` + "°")
      $(".tempHigh3").text(`${dailyForecastData[2]["temperatureHigh"]}` + "°")
      $(".tempHigh4").text(`${dailyForecastData[3]["temperatureHigh"]}` + "°")
      $(".tempHigh5").text(`${dailyForecastData[4]["temperatureHigh"]}` + "°")
      $(".tempHigh6").text(`${dailyForecastData[5]["temperatureHigh"]}` + "°")
      $(".tempHigh7").text(`${dailyForecastData[6]["temperatureHigh"]}` + "°")
      $(".tempLow1").text(`${dailyForecastData[0]["temperatureLow"]}` + "°")
      $(".tempLow2").text(`${dailyForecastData[1]["temperatureLow"]}` + "°")
      $(".tempLow3").text(`${dailyForecastData[2]["temperatureLow"]}` + "°")
      $(".tempLow4").text(`${dailyForecastData[3]["temperatureLow"]}` + "°")
      $(".tempLow5").text(`${dailyForecastData[4]["temperatureLow"]}` + "°")
      $(".tempLow6").text(`${dailyForecastData[5]["temperatureLow"]}` + "°")
      $(".tempLow7").text(`${dailyForecastData[6]["temperatureLow"]}` + "°")
      $(".precipProb1").text(`${(dailyForecastData[0]["precipProbability"]) * 100}` + "%")
      $(".precipProb2").text(`${(dailyForecastData[1]["precipProbability"]) * 100}` + "%")
      $(".precipProb3").text(`${(dailyForecastData[2]["precipProbability"]) * 100}` + "%")
      $(".precipProb4").text(`${(dailyForecastData[3]["precipProbability"]) * 100}` + "%")
      $(".precipProb5").text(`${(dailyForecastData[4]["precipProbability"]) * 100}` + "%")
      $(".precipProb6").text(`${(dailyForecastData[5]["precipProbability"]) * 100}` + "%")
      $(".precipProb7").text(`${(dailyForecastData[6]["precipProbability"]) * 100}` + "%")
      $(".shortSummary1").text(dailyForecastData[0]["icon"])
      $(".shortSummary2").text(dailyForecastData[1]["icon"])
      $(".shortSummary3").text(dailyForecastData[2]["icon"])
      $(".shortSummary4").text(dailyForecastData[3]["icon"])
      $(".shortSummary5").text(dailyForecastData[4]["icon"])
      $(".shortSummary6").text(dailyForecastData[5]["icon"])
      $(".shortSummary7").text(dailyForecastData[6]["icon"])
    });
  }

  $(".hourly-forecast").hide()
  $(".extended-forecast").hide()
  $(".current-weather").hide()
  $(".daily-weather").hide()

  $("#submitCityStateButton").click(function() {
    event.preventDefault();
    const cityState = $('#cityState').val();
    $(".hourly-forecast").show()
    $(".extended-forecast").show()
    $(".current-weather").show()
    $(".daily-weather").show()

    getBackground(cityState);
    getCurrentForecast(cityState);
    getDailyForecast(cityState);
    getHourlyForecast(cityState);
    getExtendedForecast(cityState);
  });

});
