export const currentCleaner = (data) => {

  const location = data.current_observation.display_location.full;
  const conditions = data.current_observation.weather;
  const temp = data.current_observation.temp_f.toFixed(0)

  const explanation = data.forecast.txt_forecast.forecastday.reduce((string, day) => {
  if(day.period === 0){
    string = day.fcttext
  }
  return string
  }, '')

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

  const observation = data.current_observation.observation_time_rfc822;
  const currentDate = observation.split(' ').slice(1, 3).reverse().toString().replace(/,/g , ' ');

  const lastUpdate = data.current_observation.observation_time_rfc822; 
  const timeOnly = lastUpdate.split('').slice(17, 19).toString().replace(/,/g , '');
  let day = false;
  if (timeOnly > 7 && timeOnly < 19) {
    day = true;
  }

  return {
    location,
    conditions,
    temp,
    explanation,
    low,
    high,
    currentDate,
    day
  }
}

