


function oddOrEven(arr){
  let arrSum= arr.reduce((a,c) => a + c)
  return arrSum % 2 === 0 ? 'even':'odd';
 }
  console.log(oddOrEven([0]))
  
 console.log(oddOrEven([0]), "even")
 console.log(oddOrEven([0, 1, 4]), "odd")
 console.log(oddOrEven([0, -1, 5]), "even")