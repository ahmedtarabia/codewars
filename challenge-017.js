const palindrome = str => {
  const stringLowerCase = str.split("").map( l => l.toLowerCase()).join("");
  const reversedString = stringLowerCase.split("").reverse().join("");
  return stringLowerCase === reversedString;
}
console.log(palindrome("RaceCar"));

