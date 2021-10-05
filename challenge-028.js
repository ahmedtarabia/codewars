// Title case: 

const titleCase = function(str) {
  let sentence = str.split("");
  let newSentence = [];

  if(sentence[0]){
    newSentence.push(sentence[0].toUpperCase());
  }
  
  for ( let i = 0; i < sentence.length ; i++) {
    
    if(sentence[i] === " ") {
      newSentence.push(sentence[i+1].toUpperCase());
    } else if (i === sentence.length -1 ) {
      break;
    } else {
      newSentence.push(sentence[i+1].toLowerCase());
    }
  }
  return newSentence.join('');
}



console.log(titleCase("this is an example")) // should return "This Is An Example"
console.log(titleCase("test")) // should return "Test"
console.log(titleCase("i r cool")) // should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")) // should return "What Happens Here"
console.log(titleCase("")) // should return ""
console.log(titleCase("A"))  // should return "A"