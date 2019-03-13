import './styles.scss';
$(document).ready(function(){

function getBackground(cityState) {
  $.get(`https://sweather-weather.herokuapp.com/api/v1/backgrounds?location=${cityState}`, function(data, status) {
    let backgroundUrl = data["data"]["attributes"]["background_url"];
    $('body').css('background-image', `url(${backgroundUrl})`);
  });
};

function getDailyForecast(cityState) {
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

$("#submitCityStateButton").click(function() {
  event.preventDefault();
  const cityState = $('#cityState').val();
  getBackground(cityState);
  getDailyForecast(cityState);

  // $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
  //   let currentForecastData = data["data"]["attributes"]["current_weather"];
  //   let dailyForecastData = data["data"]["attributes"]["daily_weather"];
  //   let currentTemp = currentForecastData["temperature"];
  //   let currentSummary = currentForecastData["summary"];
  //   let highTemp = dailyForecastData[0]["temperatureHigh"];
  //   let lowTemp = dailyForecastData[0]["temperatureLow"];
  //   let currentDate = currentForecastData["date"];
  //   $(".cityState").text(cityState);
  //   $(".currentTemp").text(`${currentTemp}` + "°");
  //   $(".currentSummary").text(currentSummary);
  //   $(".highTemp").text("High: " + `${highTemp}`+ "°");
  //   $(".lowTemp").text("Low: " + `${lowTemp}`+ "°");
  //   $(".currentDate").text(currentDate);
  //   });
  });

});
