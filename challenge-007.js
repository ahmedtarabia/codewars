const camelCase = function(input) {
  let output = "";
  for(i = 0; i < input.length; i++) {
    if(input[i-1] === " ") {
      output += input[i].toUpperCase();
    }
    else if (input[i] === " ") {
    }
    else if (input[i] !== " ") {
      output += input[i];
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
