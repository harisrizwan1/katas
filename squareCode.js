const splitN = function(s, n) {
  let output = [];
  for (let i = 0; i < s.length; i += n) {
    output.push(s.substr(i, n));
  }
  return output;
};

const squareCode = function(message) {
  let result = "";
  message = message.replace(/ /g, "");
  let sqr = (Math.ceil(Math.sqrt(message.length)));
  message = splitN(message, sqr);
  for (let i = 0; i <= sqr; i++) {
    for (let l of message) {
      if (l[i]) {
        result += l[i];
      }
    }
    result += " ";
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));