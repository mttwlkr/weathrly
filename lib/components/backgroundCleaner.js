export const backgroundCleaner = (data) => {

  let color1 = '#ffeb3b';
  let color2 = '#000000';

  const lastUpdate = data.current_observation.observation_time_rfc822; 
  const timeOnly = lastUpdate.split('').slice(17, 19).toString().replace(/,/g , '');
    if (timeOnly > 7 && timeOnly < 19) {
      color1 = '#ffffff';
    }

  return {
    background: `linear-gradient(${color1}, ${color2}`,
  }
}
