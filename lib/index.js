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
    let currentTemp = currentForecastData["temperature"];
    let currentSummary = currentForecastData["summary"];
    // debugger;
    let highTemp = dailyForecastData[0]["temperatureHigh"]
    let lowTemp = dailyForecastData[0]["temperatureLow"]
    // let currentTime = JSON.stringify(currentForecastData["time"])
    let currentDate = currentForecastData["date"]
    $(".searchLocation").text(cityState);
    // $(".currentTemp").text("Current Temperature: " + `${currentTemp}` + "°");
    $(".currentTemp").text(`${currentTemp}` + "°");
    $(".currentSummary").text(currentSummary);
    $(".highTemp").text("High: " + `${highTemp}`+ "°");
    $(".lowTemp").text("Low: " + `${lowTemp}`+ "°");
    $(".currentDate").text(currentDate);
    // let currentLocationData = JSON.stringify(forecastData);
    // $(".forecast").text(`${currentLocationData}`);
  });

});
});
