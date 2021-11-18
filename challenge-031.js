// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num) {
  // loop 1 to num
  for (let i = 1; i <= num; i++) {
    if (i % 6 === 0) {
      //same as divisble by 2 and 3.
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  //if  %2&3 fizbuzz; % 2 -> fizz; %3 buzz
}

fizzBuzz(20);
