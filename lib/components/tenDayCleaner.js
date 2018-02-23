export const tenDayCleaner = (data) => {

let tenDayArr = data.forecast.simpleforecast.forecastday.reduce((tenDayArr, day, idx, arr) => 
{
    if (idx > 0 && idx < 11) {
    let dayObj = {};
    dayObj.dayOfWeek = day.date.weekday.slice(0, 3);
    dayObj.date = day.date.day;
    dayObj.monthName = day.date.monthname.slice(0, 3);
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