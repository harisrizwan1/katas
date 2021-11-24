const camelCase = function(input) {
  let result = input.split(" ");
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join("");
};

const pascalCase = function(input) {
  let result = input.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join("");
};

const snakeCase = function(input) {
  return input.replace(/ /g, "_");
};

const kebabCase = function(input) {
  return input.replace(/ /g, "-");
};

const titleCase = function(input) {
  let result = input.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join(" ");
};

const vowelCase = function(input) {
  let result = input.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i])) {
      result[i] = result[i].toUpperCase();
    }
  }
  return result.join("");
};

const consonantCase = function(input) {
  let result = input.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < result.length; i++) {
    if (!vowels.includes(result[i])) {
      result[i] = result[i].toUpperCase();
    }
  }
  return result.join("");
};

const selector = function(input, cases) {
  switch (cases) {
  case "camel":
    return camelCase(input);
  case "pascal":
    return pascalCase(input);
  case "snake":
    return snakeCase(input);
  case "kebab":
    return kebabCase(input);
  case "title":
    return titleCase(input);
  case "vowel":
    return vowelCase(input);
  case "consonant":
    return consonantCase(input);
  }
};

const makeCase = function(input, cases) {
  if (Array.isArray(cases)) {
    let result = input;
    for (let i of cases) {
      if (["camel", "pascal", "snake", "kebab", "title"].includes(i)) {
        result = selector(result, i);
      }
    }
    for (let j of cases) {
      if (["vowel", "consonant"].includes(j)) {
        result = selector(result, j);
      }
    }
    for (let a of cases) {
      if (a === "upper") {
        result = result.toUpperCase();
      } else if (a === "lower") {
        result = result.toLowerCase();
      }
    }
    return result;
  }
  return selector(input, cases);
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));