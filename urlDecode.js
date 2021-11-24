const urlDecode = function(text) {
  let result = {};
  text = text.split("&");
  for (let i of text) {
    i = i.split("=");
    result[i[0]] = i[1].replace(/%20/g, " ");
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);