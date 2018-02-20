export const tenDayCleaner = (data) => {

let tenDayArr = data.forecast.simpleforecast.forecastday.reduce((tenDayArr, day, idx, arr) => 
{
    if (idx < 10) {
    let dayObj = {};
    dayObj.dayOfWeek = day.date.weekday;
    dayObj.date = day.date.day;
    dayObj.highTemp = day.high.fahrenheit;
    dayObj.lowTemp = day.low.fahrenheit;
    dayObj.condition = day.conditions;
    dayObj.icon_url = day.icon_url;
    tenDayArr.push(dayObj);
    }
  return tenDayArr
}, [])


return {
  tenDayArr
}

}