let nums = [1,5,4,3,2]

console.log( nums.sort( (a,b) => {return b-a} ) )


//a-b ascending
//b-a descending

// sum all the numbers of the array except the highest and the lowest element (the value,
// not the index!)

//example: [6,2,1,8,10] = > 16
//example: [1, 1, 11,2,3] => 6

function sum(arr){
  arr = arr.sort((a,b) => a-b)
  arr.pop()
  arr.shift()
  return arr.reduce( (a,c) => a+c )
}

  console.log(sum([6,2,1,8,10]))


  //pop removes the last item
  //shift removes the 1st item

  //min max way

  const sum = arr => arr.reduce((a,c) => a+c) - Math.max(...arr) - Math.min(...arr)


