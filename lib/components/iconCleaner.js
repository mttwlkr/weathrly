/* eslint-disable brace-style, semi */

const cloudFogMoon = require('../assets/Cloud-Fog-Moon.svg');
const cloudFogSun = require('../assets/Cloud-Fog-Sun.svg');
const cloudDrizzleMoonAlt = require('../assets/Cloud-Drizzle-Moon-Alt.svg');
const cloudDrizzleSunAlt = require('../assets/Cloud-Drizzle-Sun-Alt.svg');     
const cloudRainMoon = require('../assets/Cloud-Rain-Moon.svg');
const cloudRainSunAlt = require('../assets/Cloud-Rain-Sun-Alt.svg');    
const cloudSnowSun = require('../assets/Cloud-Snow-Sun-Alt.svg');     
const cloudLightningMoon = require('../assets/Cloud-Lightning-Moon.svg');            
const cloudLightningSun = require('../assets/Cloud-Lightning-Sun.svg');    
const cloudRain = require('../assets/Cloud-Rain.svg');             
const cloudSun = require('../assets/Cloud-Sun.svg');                      
const cloudHailMoonAlt = require('../assets/Cloud-Hail-Moon-Alt.svg');    
const cloudMoon = require('../assets/Cloud-Moon.svg');                     
const cloudWindMoon = require('../assets/Cloud-Wind-Moon.svg');        
const sun = require('../assets/Sun.svg');
const cloudFogAlt = require('../assets/Cloud-Fog-Alt.svg');                  
const cloudSnowMoon = require('../assets/Cloud-Snow-Moon-Alt.svg');    
const cloudWindSun = require('../assets/Cloud-Wind-Sun.svg');             
const cloudHailSunAlt = require('../assets/Cloud-Hail-Sun-Alt.svg');  
const moon = require('../assets/Moon.svg'); 
const tornado = require('../assets/Tornado.svg'); 
const cloud = require('../assets/Cloud.svg');
const cloudHailSun = require('../assets/Cloud-Hail-Sun.svg');  
const cloudHailMoon = require('../assets/Cloud-Hail-Moon.svg');  

export const iconCleaner = (day, condition) => {
  if (!day && condition) {
    if (condition.includes('Drizzle'))            {return cloudDrizzleMoonAlt}
    else if (condition === 'Rain')                {return cloudRain}   
    else if (condition.includes('Rain'))          {return cloudRainMoon}
    else if (condition.includes('Snow'))          {return cloudSnowMoon}
    else if (condition.includes('Ice'))           {return cloudHailMoon} 
    else if (condition.includes('Hail'))          {return cloudHailMoonAlt}
    else if (condition === 'Fog')                 {return cloudFogAlt}
    else if (condition.includes('Fog'))           {return cloudFogMoon}    
    else if (condition.includes('Blowing'))       {return cloudWindMoon}
    else if (condition.includes('Drifting'))      {return cloudWindMoon}
    else if (condition.includes('Thunderstorm'))  {return cloudLightningMoon}
    else if (condition.includes('Overcast'))      {return cloud} 
    else if (condition.includes('Cloud'))         {return cloudMoon}
    else if (condition === 'Clear')               {return moon}
    else {return tornado}   
  } else if (day && condition) {
    if (condition.includes('Drizzle'))            {return cloudDrizzleSunAlt}
    else if (condition.includes('Rain'))          {return cloudRainSunAlt} 
    else if (condition === 'Rain')                {return cloudRain}
    else if (condition.includes('Snow'))          {return cloudSnowSun} 
    else if (condition.includes('Ice'))           {return cloudHailSun}
    else if (condition.includes('Hail'))          {return cloudHailSunAlt}  
    else if (condition === 'Fog')                 {return cloudFogAlt}
    else if (condition.includes('Fog'))           {return cloudFogSun}         
    else if (condition.includes('Blowing'))       {return cloudWindSun}
    else if (condition.includes('Drifting'))      {return cloudWindSun}
    else if (condition.includes('Thunderstorm'))  {return cloudLightningSun}
    else if (condition.includes('Overcast'))      {return cloud} 
    else if (condition.includes('Cloud'))         {return cloudSun}
    else if (condition === 'Clear')               {return sun}
    else {return tornado}
  }
}
