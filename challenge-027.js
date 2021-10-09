// Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

//parameters - a string that only contains words, separated by single spaces, puncuation stays appended to last word

//returns - a string that contains no spaces with the first letter of each word capitalized


//examples: "hello case" => "HelloCase"
//          "camel case word" => "CamelCaseWord"

//psuedocode




function camelCase(str) {
  return str.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join('')
}

console.log(camelCase('hello case'), "HelloCase")
console.log(camelCase('came case word'), "CamelCaseWord")
