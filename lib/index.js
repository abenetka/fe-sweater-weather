import './styles.scss';
$(document).ready(function(){
$("#submitCityStateButton").click(function() {
  event.preventDefault();
  let cityState = $('#cityState').val();
  $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
    // debugger;
    // window.alert(`${status}`)
    let currentForecastData = data["data"]["attributes"]["current_weather"];
    let dailyForecastData = data["data"]["attributes"]["daily_weather"];
    let currentTemp = JSON.stringify(currentForecastData["temperature"]);
    let currentSummary = JSON.stringify(currentForecastData["summary"]);
    // debugger;
    let highTemp = JSON.stringify(dailyForecastData[0]["temperatureHigh"])
    let lowTemp = JSON.stringify(dailyForecastData[0]["temperatureLow"])
    // let currentTime = JSON.stringify(currentForecastData["time"])
    let currentDate = JSON.stringify(currentForecastData["date"])
    $(".searchLocation").text(cityState);
    $(".currentTemp").text("Current Temperature: " + `${currentTemp}` + "°");
    $(".currentSummary").text(currentSummary);
    $(".highTemp").text(highTemp);
    $(".lowTemp").text(lowTemp);
    $(".currentDate").text(currentDate);
    // let currentLocationData = JSON.stringify(forecastData);
    // $(".forecast").text(`${currentLocationData}`);
  });

});
});
