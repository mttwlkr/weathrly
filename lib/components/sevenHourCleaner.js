export const sevenHourCleaner = (data) => {
console.log('data', data)
let sevenHourArr = data.hourly_forecast.reduce((sevenHourArr, hour, idx, arr) => {
    if (idx < 7) {
    let hourObj = {};
    hourObj.hour = hour.FCTTIME.hour;
    hourObj.temp = hour.temp.english;
    hourObj.condition = hour.condition;
    hourObj.icon_url = hour.icon_url;
    sevenHourArr.push(hourObj);
    }
  return sevenHourArr
}, [])

console.log('sevenHourArr', sevenHourArr)

return {
  sevenHourArr
}

}