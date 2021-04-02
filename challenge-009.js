const conditionalSum = function (values, condition ) {
  let Num = 0;
  if(condition === 'even') {
    for(i=0; i<values.length; i++) {
      if(values[i]%2 === 0) {
        Num += values[i];
      }
    }
  } 
  else if (condition === 'odd') {
    for (j = 0;j < values.length; j++) {
      if(values[j]%2 !== 0) {
        Num += values[j];
      }
    }
  }
  else {
    return 0
  }
  return Num
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));