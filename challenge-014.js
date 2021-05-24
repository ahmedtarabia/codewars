const urlEncode = function(text) {
  text = text.trim()
  let full = '';
  const z = "20%"
  
  
  for(i = 0; i < text.length; i++) {
    if(text[i] !== ' ') {
      full += text[i];
      console.log(full)
    }
    else if (text[0] === " " || text[text.length] === " ") {
      full.pop();
    }
    else if(text[i] === " ") {
      full += z;
      console.log(full);
    }
  }
  
  return full
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
