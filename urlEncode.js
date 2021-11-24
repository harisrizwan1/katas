const urlEncode = function(text) {
  return text.trim().replace(/ /g, "%20");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));