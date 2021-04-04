const checkAir = function (samples, threshold) {
  let dirtyNum = 0;
  let cleanNum = 0;
  for(i = 0; i<samples.length; i++) {
    if(samples[i] === 'clean') {
      cleanNum += 1;
    }
    else if (samples[i] === "dirty") {
      dirtyNum += 1
    }
  }
  sum = dirtyNum + cleanNum;
  percent = (dirtyNum / sum )*100

  if(percent > (threshold*100)) {
    return "Polluted"
  } else {
    return "Clean"
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

