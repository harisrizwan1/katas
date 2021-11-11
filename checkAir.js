const checkAir = function (samples, threshold) {
  let dirty = 0;
  for (let i of samples) {
    if (i === "dirty") {
      dirty += 1;
    }
  }
  if (dirty / samples.length < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))