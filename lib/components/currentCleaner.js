export const currentCleaner = (data) => {
  // Location
  const currentLocation = data.current_observation.display_location.full;
  const fullCityState = data.current_observation.display_location.full 
  const zip = data.current_observation.display_location.zip
  const latitude = data.current_observation.display_location.latitude
  const longitude = data.current_observation.display_location.longitude
  const elevation = data.current_observation.display_location.elevation

  // Summary
  const currentWeatherSummary = data.current_observation.weather 
  const currentExplanation = data.forecast.txt_forecast.forecastday.reduce((string, day) => {
  if(day.period === 0){
    string = day.fcttext
  }
  return string
}, '') 

  // Current Temperature
  const currentTemp_F = data.current_observation.temp_f
  const currentTemp_C = data.current_observation.temp_c
  const currentTemp_String = data.current_observation.temp_string
  const high = data.forecast.simpleforecast.forecastday.reduce((string,day) => {
    if(day.period === 1){
    string = day.high.fahrenheit
  }
  return string
}, '') 
  const low = data.forecast.simpleforecast.forecastday.reduce((string,day) => {
    if(day.period === 1){
    string = day.low.fahrenheit
  }
  return string
}, '') 

   
  // Current Wind
  const currentWindString = data.current_observation.wind_string
  const currentWindMPH = data.current_observation.wind_mph
  const currentWindDirection = data.current_observation.wind_dir

  // Current Precipitation
  const precipTodayString = data.current_observation.precip_today_string
  const precipTodayIn = data.current_observation.precip_today_in

  // Current Other
  const currentUV = data.current_observation.UV;
  const currentHumidity = data.current_observation.relative_humidity;
  const icon_url = data.current_observation.icon_url;

  // Current Time
  const currentObservation = data.current_observation.observation_time_rfc822;
  
  const currentDate = currentObservation.split(' ').slice(1, 3).reverse().toString().replace(/,/g , ' ');

  const timeCleaner = (string) => {
  let suffix = " AM Local Time";
  let timeOnly = string.split(' ').slice(4, 5).toString();
  let currentTime = timeOnly.split('').splice(0, 5).toString().replace(/,/g , ' ');
  let characters = currentTime.split(":");
    if (characters[0] > 12) {
      characters[0] = characters[0] - 12;
      suffix = " PM Local Time"
    }
  return characters[0] + ":" + characters[1] + suffix
  }

  const currentTime = timeCleaner(currentObservation)
  
  const iconCleaner = (condition) => {
    switch (condition) {
      case 'Clear': return '3fn5vPD.png'
    }
  }

  const icon = iconCleaner(currentWeatherSummary)

  return {
    currentLocation,
    currentWeatherSummary,
    currentTemp_F,
    currentWindMPH,
    precipTodayIn,
    currentHumidity,
    currentExplanation,
    low,
    high,
    currentDate,
    currentTime,
    icon
  }
}