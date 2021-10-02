//Validate Parentheses using the stack data structure:

function validateParentheses(str) {
  let stackArr = [];

  for (let i = 0; i < str.length; i++) {
    let lastParentheses = stackArr[stackArr.length - 1];

    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stackArr.push(str[i]);
    } else if (
      (str[i] === ")" && lastParentheses === "(") ||
      (str[i] === "}" && lastParentheses === "{") ||
      (str[i] === "]" && lastParentheses === "[")
    ) {
      stackArr.pop();
    } else {
      return false;
    }
  }
  return stackArr.length > 0 ? false : true;
}

console.log("() -", validateParentheses("()"));
console.log("[ -", validateParentheses("["));
console.log("([{}]) -", validateParentheses("([{}])"));
console.log("[()[]} -", validateParentheses("[()[]}"));
console.log("([[]{[]}][]({})) -", validateParentheses("([[]{[]}][]({}))"));
console.log("{}[ -", validateParentheses("{}["));
