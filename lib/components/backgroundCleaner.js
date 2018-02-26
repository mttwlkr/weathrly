export const backgroundCleaner = (data) => {
  let topColor;
  let bottomColor = '#333847'  

  const conditions = data.current_observation.weather;
    console.log(conditions)
    if (conditions === 'Clear') {
      topColor = '#E8D5AF'
    } else if (conditions.includes('Rain')) {
      topColor = '#169690'
    } else if (conditions.includes('Snow')) {
      topColor = '#bfc6cc'
    } else if (conditions.includes('Cloud')) {
      topColor = '#cac8c7'
    } else {
      topColor = '#8B8D92'
    }

  return {
    background: `linear-gradient(${topColor}, ${bottomColor}`,
  }
}
