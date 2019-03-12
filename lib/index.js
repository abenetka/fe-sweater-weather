import './styles.scss';
$(document).ready(function(){
$("#submitCityStateButton").click(function() {
  event.preventDefault();
  let cityState = $('#cityState').val();
  $.get(`https://sweather-weather.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status) {
    // debugger;
    // window.alert(`${status}`)
    let currentForecastData = data["data"]["attributes"]["current_weather"];
    let currentTemp = JSON.stringify(currentForecastData["temperature"]);
    $(".currentTemp").text("Current Temperature: " + `${currentTemp}` + " degrees");
    // let currentLocationData = JSON.stringify(forecastData);
    // $(".forecast").text(`${currentLocationData}`);
  });

});
});
