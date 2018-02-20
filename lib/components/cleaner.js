export const weatherDataCleaner = (data) => {
  // Location
  const currentLocation = data.current_observation.display_location.full;
  const fullCityState = data.current_observation.display_location.full 
  const zip = data.current_observation.display_location.zip
  const latitude = data.current_observation.display_location.latitude
  const longitude = data.current_observation.display_location.longitude
  const elevation = data.current_observation.display_location.elevation

  // Summary
  const currentWeatherSummary = data.current_observation.weather 

  // Current Temperature
  const currentTemp_F = data.current_observation.temp_f
  const currentTemp_C = data.current_observation.temp_c
  const currentTemp_String = data.current_observation.temp_string

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
  const icon_url = data.current_observation.icon_url

  return {
    currentLocation,
    currentWeatherSummary,
    currentTemp_F,
    currentWindMPH,
    precipTodayIn,
    currentHumidity,
    icon_url,
  }
}