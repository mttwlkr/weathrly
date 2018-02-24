export const backgroundCleaner = (data) => {
  let color1 = 'red';
  let color2 = 'black';

  const lastUpdate = data.current_observation.observation_time_rfc822; 
  const timeOnly = lastUpdate.split('').slice(17, 19).toString().replace(/,/g , '');
    if (timeOnly > 7 && timeOnly < 25) {
      color1 = 'yellow';
    }

  return {
    color1 
  }
}

// style={{background: `linear-gradient(${color1}, ${color2}`}}