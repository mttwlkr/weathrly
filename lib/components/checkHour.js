export const checkHour = (military) => {
  if (military > 7 && military < 19) {
    return true;
  } else {
    return false;
  }  
};
