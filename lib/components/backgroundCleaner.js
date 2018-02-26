export const backgroundCleaner = (data) => {
  let topColor;
  let bottomColor = '#333847'  

  const conditions = data.current_observation.weather;
    if (conditions === 'Clear') {
      topColor = '#E8D5AF' // #E8D5AF // light blue
    } else if (conditions.includes('Rain')) {
      topColor = '#2d3851' // #55482F // 
    } else if (conditions.includes('Snow')) {
      topColor = '#bfc6cc' // offwhite
    } else if (conditions.includes('Cloud')) {
      topColor = '#F0D7C4' // her tan
    } else {
      topColor = '#8B8D92' // purple
    }

  return {
    background: `linear-gradient(${topColor}, ${bottomColor}`,
  }
}

// #57A5A5 // day
// #254375 // night
// #e9eaeb // snow
// #6ecdb6 // rain
// #fdc958 // night clear
// #FD654B // day clear

// Color Pallet

// #e9eaeb // snow
// #acd0dc // snowsky

// #50f9da // rain sun
// #59d2f5 // rain sunsky

// #254375 // clear nightsky
// #e575fa // clear 

// #ff4e48 // sunsky
// #fdc958 // sun

// #488a9f // thundersky
// #6ecdb6 // thunder
