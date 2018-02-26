export const sevenHourCleaner = (data) => {

  let sevenHourArr = data.hourly_forecast
    .reduce((sevenHourArr, hour, idx) => {
      if (idx < 7) {
        let hourObj = {};
        
        hourObj.hour = hour.FCTTIME.civil;
        hourObj.military = hour.FCTTIME.hour;
        hourObj.temp = hour.temp.english;
        hourObj.condition = hour.condition;
        hourObj.icon_url = hour.icon_url;
        sevenHourArr.push(hourObj);
      }
      return sevenHourArr;
    }, []);

  return {
    sevenHourArr
  };
};
  
