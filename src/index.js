const middleChar = (string) => {
  if (!string || string.length < 0 || string.length > 1000) return false;
  else if (string.length % 2 != 0) {
    return string[Math.floor(string.length / 2)]
  }
};
  
module.exports = {
  middleChar,
};