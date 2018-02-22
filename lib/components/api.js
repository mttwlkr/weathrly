import key from './key'

const root = 'http://api.wunderground.com/api/';

const city = ''

const retrieveWeather = (userInput) => {
  let splitCity = userInput.split(',')
  let city = splitCity[0];
  let state = splitCity[1];
  console.log("city: ", city)
  return fetch(`${root}${key}/conditions/&/forecast10day/&/hourly/q/${state}/${city}.json`)
}

export {
  retrieveWeather,
}


