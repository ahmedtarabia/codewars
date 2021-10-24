// Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false


const checkForImposterSyndrome = (str) => 
  str.includes('not ready') 
  || str.includes("can't interview yet")



function check(str) {
  if (str.includes('not ready')) {
    return true
  }
  else if (str.includes("can't interview yet")) {
    return true
  }
  else {
    return false
  }
}

console.log(checkForImposterSyndrome("I'm not ready yet"))
console.log(checkForImposterSyndrome("I'm am sooo ready"))

console.log(check("I'm not ready yet"))
console.log(check("I'm am sooo ready"))


const checkForImposterSyndrome= ( str) =>
str.includes('not ready')
|| str.includes("can't interview yet")